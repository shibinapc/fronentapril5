import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Forget() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const navigator = useNavigate()

    useEffect(() => {
        console.log('Email is: ', email);
        console.log('Password is: ', password);}, [email, password])
        const handleSubmit = async () => {
            
            setError('password updated successfully!')
            const response = await axios.post('http://localhost:2000/forget', {
            email,password
        })
        if(response.data){
            console.log(response.data)
            

        }
    }
        
        return(
        <div style={{backgroundImage:`url(/imgfoget.jpeg)`,backgroundSize:'100%', height:'750px' , display:'flex',flexDirection:'column',justifyContent:'center', gap:'10px', alignItems:'center'}}>
            <h1 >Update New Password</h1>
            <input type="text" name="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} style={{width:'500px',padding:'10px'}}/>
            <input type="text" name="New password" placeholder="Enter New password" onChange={(e) => setPassword(e.target.value)} style={{width:'500px',padding:'10px'}}/> 
            
           <button style={{backgroundColor:'green', borderRadius:'5px ', width:'200px'}} onClick={handleSubmit}>OK</button>
            <div style={{color:'blue'}}>{error}</div>
        </div>
    );
}
export default Forget;