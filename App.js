import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1", key: "child1" }, "Child 1"),
    React.createElement("div", { id: "child2", key: "child2" }, "Child 2")
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);