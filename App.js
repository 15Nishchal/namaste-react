const heading = React.createElement("h1", {id: "heading", xyz: "react"}, "Hello World from React!");
//"Hello World from React!" -- this is the children which will go inside my h1 tag
//second arg is attributes they all are come inside props
//we are creating a ReactElement at the end of the day, this h1 is not the h1 element it is the object
//this heading is react h1 element, React Element is nothing but a normal javascript object



/*
this root.render function job is to take this object, create h1 tag which the browsers understand and put that inside
that root element that we put in over here -- document.getElementById('root'))
this render method is basically converting this heading object and put it into DOM
 */

//how to create nested html structure in HTML
/* 
I want to create this similiar structure using React
<div id="parent">
    <div id="child1">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag </h2>
    </div>
    <div id="child2">
        <h1>I am h1 tag of child1</h1>
        <h2>I am h2 tag of child2 </h2>
    </div>
</div> 
if you have to create two siblings or multiple of a parent, give an array of children
i.e [React.createElement(), React.createElement()]
*/

// const parent = React.createElement(
//     'div', 
//     {id: 'parent'}, 
//     React.createElement(
//     'div', 
//     {id: 'child'},
//     [React.createElement('h1', {}, 'I am an h1 tag'), React.createElement('h2', {}, 'I am an h2 tag')]
//     )
//     );
//this parent has two children.//so we pass an array of two children

//creating nested html structure inside react app
const parent1 = React.createElement("div", {id: "parent"}, 
React.createElement("div", {id: "child"}, React.createElement("h1", {}, "I am a h1 tag")));
//third argument is the children that you have to pass in` 

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag")
]),
React.createElement("div", {id: "child2"}, [React.createElement("h1", {}, "I am h1 tag"),
React.createElement("h2", {}, "I am h2 tag")])
])

//this react element is not object
//while it is rendering on to the DOM, it converts into html and put it on the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(parent);

root.render(parent);