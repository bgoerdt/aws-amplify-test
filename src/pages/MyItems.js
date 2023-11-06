import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Authenticator } from '@aws-amplify/ui-react';
import { Auth } from "aws-amplify";

function MyItems() {
    const [jwt, setJwt] = useState('');

    useEffect(() => {
        Auth.currentSession()
            .then(session =>
                setJwt(session.getIdToken().getJwtToken())
            );
    }, []);

    return (
      <Authenticator>
      {({ signOut, user }) => (
        <div>
            <p>Welcome {user.username}</p>
            <p>JWT: {jwt}</p>
            <button onClick={signOut}>Sign out</button>

            <h1>My Items</h1>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
      )}
      </Authenticator>
    );
  }
  
  export default MyItems;
  