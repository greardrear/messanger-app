import Button from './LogButton'
import User from './User'
import Password from './Password'
import { useState } from 'react'

const LoginPage = () => {
const {username, setUsername} = useState('');
const {password, setPassword} = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const authObject = {'User-Name': username , 'User-Secret': password }

        alert ('submit');

    
    }

   
    return (
        <div className = 'login-box'>
            
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <User onChange={(e) => setUsername(e.target.value)}/>
            <Password onChange = { (e) => setPassword(e.target.value)}/>
            
            <Button />
            </form>
            
         </div>
    )
}

export default LoginPage
