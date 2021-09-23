import { FinishedTxData, openContractCall } from "@stacks/connect";
import { Button } from "@stacks/ui";
import Config from "../config";

async function play() {
  return openContractCall({
    onCancel: () => alert("Cancelled!"),
    onFinish: (tx: FinishedTxData) => console.log("tx sent", tx),
    contractAddress: Config.contractAddress,
    contractName: Config.contractName,
    functionName: "count-up",
    functionArgs: [],
    //network: Network
  });
}

const PlayButton = (props: any) => {
  return (
    <Button isLoading={false} onClick={play} {...props}>
      Count up
    </Button>
  );
};

export default PlayButton;
