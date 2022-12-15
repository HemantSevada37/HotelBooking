import { useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db} from "../../firebase";
import "./mailList.css"

const MailList = () => {
  const[newEmail, setNewEmail] = useState("");
  const[error, setError] = useState("");

  const addEmail = async ()=>{
    if(!newEmail.includes('@')){
      setError("Please enter valid Email id");
      setTimeout(()=>{
        setError("");
      },4000);
      return;
    }
    try{
      const res = await addDoc(collection(db, "Emails"),{
        email: newEmail,
        timeStamp: serverTimestamp(),
      });
    }catch(err){
      console.log(err);
    }
      setNewEmail("");
      setError("Your Email id saved successfully.");
  }

  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="email" 
            placeholder="Your Email" 
            value={newEmail} 
            onChange={(e)=>{setNewEmail(e.target.value)}}
            />
        <button onClick={addEmail}>Subscribe</button>
      </div>
      <span className="mailError">{error}</span>
    </div>
  )
}

export default MailList