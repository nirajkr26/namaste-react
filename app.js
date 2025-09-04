import React from "react";
import ReactDOM from "react-dom/client";

//react element
const heading=(
    <h1 className="head">
        react jsx
    </h1>
)

//react fnctional component
const HeadingComponent=()=>{
    <div id="container">
        <h1 className="header">react functional component</h1>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);





// root.render(heading); //rendering element
// root.render(<HeadingComponent/>) //rendering component