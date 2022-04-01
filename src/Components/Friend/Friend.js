import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
   const {id,name,username}=props.data;
   const navigate = useNavigate();
   const userDetals =()=>{
      const path = `/user/${id}`;
      navigate(path);
   }
   return (
      <div>
         <p>User Name : {name}</p>
         <button onClick={userDetals}> {username} {id}</button>
      </div>
   );
};

export default Friend;