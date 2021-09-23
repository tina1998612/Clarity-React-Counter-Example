import { Button } from '@stacks/ui';
import { userSession } from '../auth';

function signOut() {
	userSession.signUserOut(window.location.origin);
}

const SignOutButton = (props: any) => {
  return (
    <Button
      onClick={signOut}
      {...props}
    >
      Sign out
    </Button>
  );
};

export default SignOutButton;
