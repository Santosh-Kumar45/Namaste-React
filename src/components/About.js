import User from "./User.js";
import UserClass from "./UserClass.js";
import { Component } from "react";


class About extends Component {
    constructor(props) {
        super(props);
        console.log("parent class");
    }

    Component(){
        console.log("parent component")
    }
    render() {
        console.log("parent render")
        return (
            <div>
                <h1>About</h1>
                <h2>This is namaste react web series</h2>
                <User name={"Akshay Saini(function component)"} />
                <UserClass name={"Akshay Saini(class component)"} location={"New Delhi"} />
                <UserClass name={"santosh kumar(class component)"} location={"jharkhand"} />

            </div>
        );
    }

};

export default About;