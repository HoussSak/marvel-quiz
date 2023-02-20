import { useEffect, useRef,useState} from "react"
import { Link } from "react-router-dom";


const Landing = () => {
 const refWolverine =  useRef(null);
 const [btn,setBtn] = useState(false);
 useEffect(()=> { 
  refWolverine.current.classList.add('startingImg');
 setTimeout(() => {
  refWolverine.current.classList.remove('startingImg'); 
  setBtn(true)
 }, 1000);

 },[])

 const setImg=(val)=> {
  refWolverine.current.classList.add(val);
 }

 const clearImg=()=> {
  if(refWolverine.current.classList.contains('leftImg')) {
    refWolverine.current.classList.remove('leftImg')
  } else {
    refWolverine.current.classList.remove('rightImg')
  }
 }

 const displayBtn = btn && (
      <>
        <div className='leftBox' onMouseOver={()=>setImg("leftImg")} onMouseOut={clearImg}>
            <Link className='btn-welcome' to="/signup">Inscription</Link>
        </div>
        <div className='rightBox' onMouseOver={()=>setImg("rightImg")} onMouseOut={clearImg}>
            <Link className='btn-welcome' to="/login">Connexion</Link>
        </div>
      </>

 )
  return (
    <main ref={refWolverine} className='welcomePage'>
        { displayBtn }
    </main>
  )
}

export default Landing
