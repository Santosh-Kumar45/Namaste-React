import { useState } from "react";

const [btnNameReact, setBtnNameReact] = useState("Login");
<button
        className="login"
        onClick={() => {
        btnNameReact=="Login"? setBtnNameReact("Logout"):setBtnNameReact("Login");             
        }>{btnNameReact}
</button>