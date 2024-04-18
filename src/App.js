import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import React, {useState} from 'react';

function App() 
{
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [profilePic, setProfilePic] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return <GoogleLogin
  onSuccess={credentialResponse => {
    const decoded = jwtDecode(credentialResponse?.credential)
    console.log(decoded);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
}
export default App;
