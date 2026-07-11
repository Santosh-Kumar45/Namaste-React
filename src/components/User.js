import { useState } from "react";
const User = (props) => {

   
    const [count,setCount]=useState(0);
   

    return (
        
        <div className="user-card">
            <button onClick={()=>{
               setCount(count=>count+1)
            }}>click here</button>
            <h1>Count={count}</h1>
           
            <h2>Name:{props.name}</h2>
            <h3>Location: dehradun</h3>
            <h4>Contact: @akshaymarch7</h4>
        </div>
    );

};

export default User;