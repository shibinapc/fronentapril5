import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = async (e) => {

    try {
      const response = await axios.post('http://localhost:2000/login', { email, password });
      const { firstName } = response.data;
      dispatch({ type: 'SET_USER', payload: firstName }); 
       if(response.data) {
        navigate('/')
       }       
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const redirecter = () => {
    navigate('/register');
  }
  

  return (
    <>
   
    <div style={{ backgroundImage:`url(/loginimg3.webp)` ,backgroundSize:'100%', height:'750px', display:'flex', flexDirection:'column', alignItems:'center',gap:'10px',justifyContent:'center'}}>
      <div style={{borderBlock:'solid',display:'flex', flexDirection:'column', alignItems:'center',gap:'10px',justifyContent:'center'}}>
      <h2 style={{color:'indigo'}}>LOGIN</h2>
      <div>
        <label> Email :</label>
        <input style={{width:'220px', height:'30px'}}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input style={{width:'200px', height:'30px'}}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div >
      <button style={{height:'50px', backgroundColor:'lightblue', borderColor:'lightcyan'}} onClick={handleSubmit}>LOGIN</button> 

      <button style={{height:'50px' ,backgroundColor:'lightcyan', borderColor:'lightblue'}}  onClick={redirecter}>REGISTER</button> 
      </div>
      <div>
            <a href="/forget">Forget Password?</a>
        </div>
    </div>
    </div>
    </>
  );
};

export default Login;
