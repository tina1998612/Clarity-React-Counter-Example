import { Component } from "react";
import "./App.css";
import { displayName, userSession } from "./auth";
import ConnectWalletButton from "./components/connect-wallet-button";
import PlayButton from "./components/play-button";
import SignOutButton from "./components/sign-out-button";
import TopCounter from "./components/top-counter";

export default class App extends Component {
  componentDidMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData: any) => {
        window.history.replaceState({}, document.title, "/");
        this.setState({ userData: userData });
      });
    } else if (userSession.isUserSignedIn()) {
      this.setState({ userData: userSession.loadUserData() });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Multiplayer Counter</h1>
        </header>

        {userSession.isUserSignedIn() && (
          <div>
            Signed in as {displayName()} <SignOutButton />
          </div>
        )}

        <h2>Top counter</h2>
        <TopCounter />

        <h2>Play</h2>
        {!userSession.isUserSignedIn() ? (
          <ConnectWalletButton />
        ) : (
          <PlayButton />
        )}
      </div>
    );
  }
}
