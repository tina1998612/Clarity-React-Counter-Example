import { AppConfig, UserSession, showConnect } from "@stacks/connect";
import { Person } from "@stacks/profile";

// store_write: request permission to write and store data
// publish_data: request permission to announce user's public profile
const appConfig = new AppConfig(["store_write", "publish_data"]);

export const userSession = new UserSession({ appConfig });

// triggered when clicked the login button
export function authenticate() {
  showConnect({
    appDetails: {
      name: "My App",
      icon: window.location.origin + "/logo512.png",
    },
    redirectTo: "/",
    onFinish: () => {
      window.location.reload();
    },
    userSession: userSession,
  });
}

export function getUserData() {
  return userSession.loadUserData();
}

export function getPerson() {
  return new Person(getUserData().profile);
}

export function displayName() {
  const userData = getUserData();
  // marvin.btc or stacks address
  return userData.username || userData.identityAddress;
}
