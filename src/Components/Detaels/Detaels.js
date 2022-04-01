import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Dateals.css'

const Detaels = () => {
   const {id} =useParams();
   const [user , setUser] = useState({});
   useEffect(()=>{
      const url = `https://jsonplaceholder.typicode.com/users/${id}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setUser(data));
   },[user]);
   return (
      <div id='userDateals'>
         <h1>Detaels Single User </h1>
         <p>user id : <strong>{user.id}</strong></p>
         <p> User name : <strong> {user.name}</strong></p>
         <p>Email : <strong>{user.email}</strong></p>
         <p> City <strong>{user.address?.city}</strong></p>
         <p>Company Name : <strong>{user.company?.name}</strong></p>
      </div>
   );
};

export default Detaels;