import React, { useEffect, useState } from 'react';
import fire from './Components/fire';
import Login from './Components/Login';
import './App.css';
import Hero from './Components/Hero';


function App() {
  const [count, setCount] = useState(0)
  const[user, setUser] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[emailerror, setEmailerror] = useState('');
  const[passworderror, setPassworderror] = useState('');
  const[hasAccount, setHasAccount] = useState(false);

  const clearinputs  =()  =>{
 setEmail('');
 setPassword('');
  }
  const clearErrors  =()  =>{
    setEmailerror('');
    setPassworderror('');
     }
  const handleLogin  = ()  =>{
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err  =>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
        setEmailerror(err.message);
        break;
        case "auth/wrong-password":
          setPassworderror(err.message);
          break;
      }
    })
  }

  const handleSignup  = ()  =>{
clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err  =>{
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/email-invalid":
        
        setEmailerror(err.message);
        break;
        case "auth/week-password":
          setPassworderror(err.message);
          break;
      }
    })
  }
const handleLogout = ( ) =>{
fire.auth().signOut();
};
const authListener = () =>{
fire.auth().onAuthStateChanged(user  =>{
  if(user){ 
    clearinputs();
    setUser(user);
  } else{
    setUser("");
  }
});
};
useEffect(() =>{
authListener();
}, [])


  return (
    <div className="App">
      {user ? (
         <Hero handleLogout={handleLogout}/>
      ):(
<Login email={email}
 setEmail={setEmail} 
 password={password}
  setPassword={setPassword}
 handleLogin={handleLogin}
 handleSignup={handleSignup}
 hasAccount={hasAccount}
 setHasAccount={setHasAccount}
emailerror={emailerror}
passworderror={passworderror}
/>
      )}

     
    </div>
  )
}

export default App
