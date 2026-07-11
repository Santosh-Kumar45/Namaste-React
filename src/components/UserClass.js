import react from "react";

class UserClass extends react.Component {

    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",


            }
        };
        // console.log("child constructor")
    }

    async componentDidMount() {
        //  console.log("child component");

        //API calling 
        const data = await fetch("https://api.github.com/users/octocat");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });


        console.log(json);
    }

    render() {
        // console.log("child render")

        const { name, location } = this.state.userInfo


        return (
            <div className="user-card" >
                <img src="https://avatars.githubusercontent.com/u/583231?v=4"/>
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact: @akshaymarch7</h4>
            </div>
        )
    }
}

export default UserClass;