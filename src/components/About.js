import User from "./User.js";
import UserClass from "./UserClass.js";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is namaste react web series</h2>
            <User name={"Akshay Saini(function component)"}/>
            <UserClass name={"Akshay Saini(class component)"} location={"New Delhi"}/>
            
        </div>
    );
};

export default About;