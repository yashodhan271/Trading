import React from 'react'
import './Login.css'

const Login = (props) => {

   const  { email, setEmail, password, setPassword, handleLogin, handleSignup, setHasAccount, hasAccount, emailerror, passworderror}= props;



    return (
        <section className="login">

<div className="loginContainner">
    <label >Username</label>
    <input type="text" name="" id=""autoFocus required value={email} onChange={(e)=> setEmail(e.target.value)} />
    <p className="errorMsg">{emailerror}</p>
    <label>Password</label>
    <input type="password" name="" id=""autoFocus required value={password} onChange={(e)=> setPassword(e.target.value)} />
    <p className="errorMsg">{passworderror}</p>
    <div className="btnContainer">
        {hasAccount ?(
          <>
          <button onClick={handleLogin}>Sign In</button>
          <p>Dont have an account ? <span onClick={()=> setHasAccount(!hasAccount)}> Sign up</span> </p> 
          </>
        ):
        (
            <>
            <button onClick={handleSignup}>Sign Up</button>
            <p>Have an account ? <span onClick={()=> setHasAccount(!hasAccount)}>Sign In</span> </p>
            </> 
        )};
    </div>
</div>

        </section>
      )

}
  

export default Login;
