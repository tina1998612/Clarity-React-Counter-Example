import { StacksTestnet } from "@stacks/network";

const Config = {
	contractName: "multiplayer-counter",
	contractAddress: "ST1YMQJR0T1P52RT1VVPZZYZEQXQ5HBE6VYZ9K7ZK"
}
// See contract at: https://explorer.stacks.co/txid/0x4f080e895c26c930cc6eefeb97eb6b46f4243fb58d21647e4dd9d20a2d839bd8?chain=testnet

export default Config;

export const Network = new StacksTestnet();
