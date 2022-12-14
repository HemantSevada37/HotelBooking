import { useContext, useState } from "react";
import "./login.css";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
// import {AuthContext} from "../../context/AuthContext"
import { useLocation } from 'react-router-dom';


const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.state);

  const navitage = useNavigate()
  
  // setActiveButton(location.state);

  // const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    setError("");
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user.email.split('@')[0]);
        setEmail("");
        setPassword("");
        // dispatch({type:"LOGIN", payload:user})
        localStorage.setItem("hotelUser", JSON.stringify(user.email.split('@')[0]));
        navitage("/");
        // navitage("/", {state: {userName: (user.email.split('@')[0])}})
      })
      .catch((error) => {
        setError("Wrong email or password!");
      });
  };

  const handleRegister =(e)=>{
    e.preventDefault();
    setError("");
    if(!email.includes('@')){
      setError("Please enter correct Email");
      return;
    }
    if(password.length < 6){
      setError("password length should be greater than 5");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        // console.log(user);
        setEmail("");
        setPassword("");
        // ...
      })
      .catch((error) => {
        console.log("error");
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });

  }

  const handleActiveButton =(e, value)=>{
    setError("");
    e.preventDefault();
    setActiveButton(value);
  }

  return (
    <div className="login">
      <form >
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="loginButtons">
          {activeButton ?
          <>
              <button onClick={handleLogin} 
                  className="activeButton"
                  >Login</button>
              <button onClick={(event)=>{handleActiveButton(event, false)}}
                  >Register</button>
            </>
          :
            <>
                <button onClick={(event)=>{handleActiveButton(event, true)}} 
                    >Login</button>
                <button onClick={handleRegister}
                    className="activeButton"
                  >Register</button>
            </>
          }
        </div>
        {error && <span>{error}</span>}
      </form>
    </div>
  );
};

export default Login;

