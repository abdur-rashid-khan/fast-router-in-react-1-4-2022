import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
   const {id,name,username}=props.data;
   const navigate = useNavigate();
   const userDetals =()=>{
      const path = `/detaels/${id}`;
      navigate(path);
   }
   return (
      <div>
         <p>User Name : {name}</p>
         <button onClick={userDetals}> {username} {id}</button>
         {/* <a href={'/user/'+id}>friendDelats</a> */}
         
         <Link to={'/detaels/'+id}>friendDelats</Link>
      </div>
   );
};

export default Friend;