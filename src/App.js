import './App.css';
import '@aws-amplify/ui-react/styles.css';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';

Amplify.configure({
  Auth: {
      region: 'us-west-2',
      userPoolId: 'us-west-2_yv4FMrCJ3',
      userPoolWebClientId: '4qb721ooi39g3re6fjt90cogis'
  }
})

function App() {
  return (        
    <Authenticator>
      {({ signOut, user }) => (
          <div>
              <p>Welcome {user.username}</p>
              <button onClick={signOut}>Sign out</button>
          </div>
      )}
  </Authenticator>
  );
}

export default App;
