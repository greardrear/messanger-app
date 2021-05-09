
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const User = () => {
    return (
        
            <div className = 'textbox'>
            <FontAwesomeIcon icon={faUser} />

        <input type ='text' placeholder ='Username' name = 'username' required ></input>
            
         
      
            
            </div>
      
    )
}

export default User
