# React & Stacks.js Example

## Folder Structure

- `/`: React project
- `clarinet/`: Clarity smart contracts

## Running the Project

## Testing the contracts

```bash
yarn test:clarinet
```

### Frontend

```bash
yarn
yarn start
```

### Smart Contract on Testnet

https://explorer.stacks.co/txid/0x4f080e895c26c930cc6eefeb97eb6b46f4243fb58d21647e4dd9d20a2d839bd8?chain=testnet

### Sample Transaction

https://explorer.stacks.co/txid/0x54662942aa01b84caa19a17465b976bf48693dbf65fee9e6971f1fab95711387?chain=testnet

## Building From Scratch

```bash
mkdir clarity-example
cd clarity-example
npx create-react-app myapp
npm init clarity-starter
cd myapp
yarn add @stacks/auth @stacks/connect
```

## Other Dev Tools

- [React Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en): Check the react components' state variables and rendering performance.
- [Netlify](https://www.netlify.com/): Deploy your react app for free.
