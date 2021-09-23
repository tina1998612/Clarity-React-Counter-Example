import { authenticate } from "../auth";
import { Button } from '@stacks/ui';

const ConnectWalletButton = (props: any) => {
  return (
    <Button
      isLoading={false}
      onClick={authenticate}
      {...props}
    >
      Connect wallet to count
    </Button>
  );
};

export default ConnectWalletButton;
