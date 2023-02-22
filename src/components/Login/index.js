import { useEffect, useState } from "react"
import {auth} from '../Firebase/firebaseConfig'
import { Link,useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const [btn,setBtn] = useState(false);
  const navigate = useNavigate();


  useEffect(()=> {
    if(email !=='' && password.length > 5) {
      setBtn(true)
    } else if(btn) {
      setBtn(false);
    }
   

  },[email,password,btn])

  const handleSubmit = e => {
    e.preventDefault(); 
    signInWithEmailAndPassword(auth,email,password)
    .then(user => {
        setEmail('');
        setPassword('');
       // props.history.push('/welcome') react-router-dom v5
        navigate('/welcome',{replace:true});
    })
    .catch(error => {
        setError(error);
        setEmail('');
        setPassword('');
    })
}
  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftLogin">
        </div>
        <div className="formBoxRight">
              <div className="formContent">

                {error !=='' && <span>{error.message}</span>}

                 <h2>Connexion</h2>
                <form onSubmit={handleSubmit}>
               
                  <div className="inputBox">
                    <input onChange={e => setEmail(e.target.value)} value={email} type="email" required autoComplete="off"/>
                    <label htmlFor="email">Email</label>
                  </div>

                  <div className="inputBox">
                    <input onChange={e=>setPassword(e.target.value)} value={password}  type="password"required autoComplete="off"/>
                    <label htmlFor="password">Mot de passe</label>
                  </div>
                 
                  {<button disabled={btn? false: true}>Connexion</button>}
                  
                </form>
                <div className="linkContainer">
                <Link className="simpleLink" to="/signup">Nouveau sur Marvel Quiz ? Inscrivez-vous maintenat.</Link>
                <br/>
                <Link className="simpleLink" to="/forgetpassword">Mot de passe oublié ? Récupérer le ici.</Link>

                </div>

              </div>

        </div>
          
      </div>
      
    </div>
  )
}

export default Login
