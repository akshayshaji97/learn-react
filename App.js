import React from 'react';
import ReactDOM from 'react-dom/client';

// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child1", key: "child1" }, "Child 1 🚀"),
//     React.createElement("div", { id: "child2", key: "child2" }, "Child 2")
// ]);
const jsxElement = <h1 className='head' tabIndex={5}> Welcome to React</h1>

const Header =  () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://png.pngtree.com/template/20210519/ourmid/pngtree-food-delivery-logo-fitness-template-image_525748.png'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = () => {
    return (
        <div className='res-card'> 
        <img className='res-logo' alt='restaurent logo' src='https://static.vecteezy.com/system/resources/previews/035/375/532/large_2x/ai-generated-chicken-biryani-spicy-indian-malabar-biryani-hyderabadi-biryani-dum-biriyani-pulao-golden-bowl-photo.jpg'/>
        <h3>Kerala Food</h3>
        <h4>Biriyani, North Indian, Asian</h4>
        <h4>4.4 Stars</h4>
        <h4>30 Minutes</h4>
    </div>
    );
};

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>

        </div>
    );
};

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