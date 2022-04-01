import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Post = () => {
   const [posts , setPosts] = useState({});
   useEffect(()=>{
      const  url = 'https://jsonplaceholder.typicode.com/posts';
      fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
   },[])
   return (
      <div>
         <h3>Total Post Here</h3>
         {
            posts.map(post => console.log(post))
         }
         <Outlet></Outlet>
      </div>
   );
};

export default Post;