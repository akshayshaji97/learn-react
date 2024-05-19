import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';

// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child1", key: "child1" }, "Child 1 🚀"),
//     React.createElement("div", { id: "child2", key: "child2" }, "Child 2")
// ]);
const jsxElement = <h1 className='head' tabIndex={5}> Welcome to React</h1>



const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);