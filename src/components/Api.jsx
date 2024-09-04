import React from 'react'
import useFetch from '../hooks/useFetch'

import "../App.css"


function Api() {
  const {loading,data,error}=useFetch("https://jsonplaceholder.typicode.com/posts");

  if(loading) return <h1 className="alert">Loading....</h1>;
  if(error) return <h1 className="alert">Error....</h1>
  return (
    
    <div className="container">
      
          {
            
            data.map(post => (
              <div className="box">
              
            <div className="profile"  >600 X 600</div>
            <div className="Name">
              <h5 id={post.id}>{post.title}</h5>
              </div>
      </div>
  
  ))}
    
    </div>
  )
}

export default Api

