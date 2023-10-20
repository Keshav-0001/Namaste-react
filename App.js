//creating the nested objects of elements


const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "h1" }, "I am a h1 tag"),
        React.createElement("h2", { id: "h2" }, "I am a h2 tag")]
    ), 
    React.createElement("div2", { id: "child2" },
        [React.createElement("h1", { id: "h1" }, "I am a h1 tag"),
        React.createElement("h2", { id: "h2" }, "I am a h2 tag")]
    )]
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);