import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  const user = useSelector((state) => state.user.user);

  return (
    <center>
    <div style={{backgroundImage:`url(/violethome.webp)` ,backgroundSize:'100%', height:'750px', display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center',gap:'10px',}} >
      <h2 style={{color:'white'}}>Welcome, {user}!</h2>
      <p style={{color:'white'}}>THIS IS YOUR HOME PAGE...</p>
      <button onClick={logout}>LOGOUT</button>
    </div>
    </center>
  );
};

export default Home;
