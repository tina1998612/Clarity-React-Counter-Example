import {
  callReadOnlyFunction,
  ClarityValue,
  cvToValue,
} from "@stacks/transactions";
import React, { Component } from "react";
import Config, { Network } from "../config";

type State = { response: null | ClarityValue };

export default class TopCounter extends Component<{}, State> {
  timer: any = null;
  constructor(props: any) {
    super(props);
    this.state = { response: null };
  }

  async componentDidMount() {
    const update = async () => {
      // call Clarity smart contract
      const response = cvToValue(
        await callReadOnlyFunction({
          contractName: Config.contractName,
          contractAddress: Config.contractAddress,
          functionName: "get-top-counter",
          functionArgs: [],
          network: Network,
          senderAddress: Config.contractAddress, // not important for read-only function, we don't use userAddress since user may not be logged in
        })
      );
      console.log(`response: ${response}`);
      this.setState({ response }); // cause a repaint of react component with the state variable 'response'
      this.timer = setTimeout(update, 10000); // update every 10 seconds
    };
    update();
  }

  // execute before component unmount
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    if (!this.state.response)
      return <div className="top-counter loading">Loading...</div>;
    return (
      <div className="top-counter">
        <div className="who">
          Principal: {(this.state.response as any).who.value}
        </div>
        <div className="count">
          Count: {(this.state.response as any).count.value}
        </div>
      </div>
    );
  }
}
