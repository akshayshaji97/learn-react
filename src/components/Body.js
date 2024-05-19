import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard resName='Kerala Food' cuisine='Biriyani, North Indian, Asian' rating='4.4 Stars' duration='30 Minutes'/>
                <RestaurantCard resName='KFC' cuisine='Burger, Fast Food' rating='3.4 Stars' duration='20 Minutes'/>
                
            </div>

        </div>
    );
};

export default Body;