import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "This is Namaste React 🚀"),
        React.createElement("h2", {}, "First h2 heading")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "First h1 heading"),
        React.createElement("h2", {}, "First h2 heading")
    ]),

]);

console.log(parent);  //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
