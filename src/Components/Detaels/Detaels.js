import React from 'react';
import { useParams } from 'react-router-dom';

const Detaels = () => {
   const {id} =useParams();
   return (
      <div>
         <h1>Detaels Single User </h1>
         <p>user id : {id }</p>
      </div>
   );
};

export default Detaels;