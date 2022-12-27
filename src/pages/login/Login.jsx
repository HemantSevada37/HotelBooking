import { useContext, useState } from "react";
import "./login.css";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.state);

  const navitage = useNavigate()

  const handleLogin = (e) => {
    setError("");
    e.preventDefault();
    if(!email.includes('@')){
      setError("Please enter correct Email");
      return;
    }
    if(password.length < 6){
      setError("password length should be longer than 5");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setEmail("");
        setPassword("");
        localStorage.setItem("hotelUser", JSON.stringify(user.email.split('@')[0]));
        navitage("/");
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
      setError("password length should be longer than 5");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log(user);
        setEmail("");
        setPassword("");
        localStorage.setItem("hotelUser", JSON.stringify(user.email.split('@')[0]));
        navitage("/");
      })
      .catch((error) => {
        console.log("error");
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="loginButtons">
          {activeButton ?
          <>
              <button onClick={handleLogin} 
                  >Login</button>
                  <p>Don't have a account?
                    <span onClick={(event)=>{handleActiveButton(event, false)}}
                    >Register</span></p>
            </>
          :
            <>
                <button onClick={handleRegister}
                  >Register</button>
                  <p>Already have a account?
                    <span onClick={(event)=>{handleActiveButton(event, true)}}
                    >Login</span></p>
            </>
          }
        </div>
        <span>{error}</span>
      </form>
    </div>
  );
};

export default Login;

