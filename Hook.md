# Hook
 
 -- main points --

-normal variable

 const createVar;

 -super powerfull variable(in hook)

 const [count ,setCount]=useState(0);


//code section

import {useState} from "react;

function Counter(){

    const [count, setCount]=useState(0);

    function handleClick(){
        setCount(count+1);
    }
}