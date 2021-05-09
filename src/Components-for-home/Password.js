
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
const Password = () => {
    return (
        <div className = 'textbox'> 
        <FontAwesomeIcon icon={faLock} />
        <input type = 'password' placeholder = 'Password' name = 'password' required ></input>
        </div>
    )
}

export default Password
