import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object => HTMLElement(render)
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste React 🚀"
);
console.log(heading);


//JSX --- HTML like or XML like syntax
//JSX (transpiled before it reaches the js ) -- PARCEL -Babel

//JSX =>Babel compiled it to  React.createElement => ReactElement-JS Object  => HTMLElement(render)
const jsxHeading = <h1 id="heading">Namaste React 🚀</h1>;

console.log(jsxHeading);

//react element
const Title=()=>(
<h1 className="head" tabIndex="5">
    Namaste React by using jsx 🚀
    </h1>
);

//component
//function component
const HeadingComponent = () => (
    
    <div id="container">
        //same 3 things
         {Title()}
         <Title/>
         <Title></Title>
         
        <h1 className="heading">Namaste react in functional component</h1>
    </div>
    
);

const HeadingComponent1 = () => <h1>santosh</h1>;



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);