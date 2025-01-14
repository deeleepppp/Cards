import React, { useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

export default function App() {
  const data = [
    {image:'https://images.unsplash.com/photo-1482443462550-d2c99314ab6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG11c2ljJTIwdGh1Ym5pbHxlbnwwfHwwfHx8MA%3D%3D',name:'Yarriyan',artist:'Arijit Singh',added:false},
    {image:'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG11c2ljJTIwdGh1Ym5pbHxlbnwwfHwwfHx8MA%3D%3D',name:'Barrishen',artist:'Anuv Jain',added:false},
    {image:'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljJTIwdGh1Ym5pbHxlbnwwfHwwfHx8MA%3D%3D',name:'Tu Rahti Hai',artist:'Aditya Rinkhari',added:false},
    {image:'https://images.unsplash.com/photo-1461784121038-f088ca1e7714?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG11c2ljJTIwdGh1Ym5pbHxlbnwwfHwwfHx8MA%3D%3D',name:'Sanam Re',artist:'Osho Jain',added:false}
  ]
  const [realData,setrealData] = useState(data)
  const handleClick = (index) => (setrealData((prev)=>{
   return prev.map((e,i)=>{
    if(i===index){
      return {...e,added:!e.added}
    }
    return e
   })
})
  )
  return (
    <>
      <div className="w-full h-screen bg-zinc-300 gap-4 ">
        <Navbar data={realData}/>
        <div className="px-20 flex gap-10 mt-10 flex-wrap">
        {realData.map((e,i)=>(
           <Card index={i} name={e.name} artist={e.artist} image={e.image} added={e.added} handleClickFunc={handleClick} />
        )
        )}
        </div>
      </div>
    </>
  );
}
