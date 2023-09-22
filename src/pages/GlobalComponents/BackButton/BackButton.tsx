import {AiOutlineLeft} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
const navigate=useNavigate();

const handleBack=()=>{
    navigate("/");
}

  return (
    <div onClick={handleBack} style={{color:"whitesmoke",position:"absolute",top:"1rem",left:"1rem",fontSize:"2.5rem",cursor:"pointer"}}>
        <i><AiOutlineLeft/></i>
    </div>
  )
}

export default BackButton