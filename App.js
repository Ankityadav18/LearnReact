import React from "react";
import  ReactDOM from "react-dom/client";


const Title=()=>{
 return <h1>React</h1>
}



const HeadingComponent=()=>{
  return  <div  id="container">
   
    <Title/>
    <h2>
      this is a react component
      
    </h2>
  </div>
}


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);