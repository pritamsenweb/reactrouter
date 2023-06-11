import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const User = () => {
  
  const {name} = useParams();
  const myLoc = useLocation();
  const myHist = useNavigate();
  console.log(myHist);
  return (
    <>
    <div>This is User Componant. Hello {name}, Welcome to React.</div>
    <h2>My Current Path is { myLoc.pathname }</h2> 

    </>
  )
}

export default User