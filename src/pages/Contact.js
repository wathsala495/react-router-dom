import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function Contact() {

  const [mainData,setMainData]=useState([]);

 useEffect(()=>{
   const geData=async ()=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json();
    if(data){
      console.log(data)
      setMainData(data)
    }
   }
   geData()

 },[])



  return (
    <div>
      <h2>THis is ontact Page
      <div>
        {mainData?.map(({id,title,body})=>
         <Link to={`/contact/${id}`} key={id}>
              <div>
                <h3>Title:{title}</h3>
              </div>
         </Link>
         
         
        )}
      </div>
      </h2>
    </div>
  )
}
