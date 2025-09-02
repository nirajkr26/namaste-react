const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" },[ React.createElement("h1", {}, "I am h1 tag"),React.createElement("h2",{},"i am h2 tag")])); 

//siblings can be created using array 
//as much and much nesting would be done it would make the code more complex,but it got a solution --- JSX

const heading = React.createElement("h1", { id: "head1" }, "hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);