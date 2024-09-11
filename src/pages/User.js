import React, { useState,useEffect } from 'react'
import { useParams ,Link} from 'react-router-dom';

export default function User() {
    const [data,setDate]=useState({});
   const {id} =useParams();
   useEffect(()=>{
    const getData = async ()=>{
        const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const datae= await res.json();
        if(datae){
            setDate(datae)
        }
    }
    return()=>{
        getData()
    }
   },[id])
   



  return (


   

    <div>
      <h2>User {data?(<div>
        <h2>{data.title}</h2>
        <h2>{data.id}</h2>
        <p>{data.body}</p>
      </div>):null}</h2>
  <Link to="/Contact">Back</Link>
    </div>
  )
}
