import React from 'react';
import ReactDom from 'react-dom/client';

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "Hello World from React"),
    React.createElement("h2", {}, "I'm h2 tag")
]),
React.createElement("div", {id: "child2"}, [React.createElement("h1", {}, "Namaste React 🐱‍🏍"),
React.createElement("h2", {}, "I am h2 tag")])
])
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(parent);

root.render(parent);