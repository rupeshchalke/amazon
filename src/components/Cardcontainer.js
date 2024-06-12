import Restaurantcard from "./Restaurantcard";
import { restaurantList } from "../const/config";
import { useState, useEffect } from "react";

const Cardcontainer = () => {
  const [restaurantData,setRestaurantData] = useState(restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
const[count,setCount] = useState(0)

const getRestaurants = async() =>{
  // const data = await fetch("https://media-assets.swiggy.com/dweb/js/vendor.c0e883a97d3e22e.js");
  // const json = await data.json();
  console.log("json");
}
  
useEffect(()=>{
  getRestaurants();
  console.log("useEffect is called");
},[count, restaurantData]);

console.log("component is rendered");

const filterRestaurants = () =>{
   const restaurants = restaurantData.filter((restaurant) =>{
    return(
    restaurant?.info?.avgRating>=4.5
    )
   } )
   setRestaurantData(restaurants);
}

  return (
    <>
    <button className="bg-danger p-2 px-2" onClick={filterRestaurants}>Top Rated Restaurants</button>
    <h1>Count is {count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
      <div className="container d-flex flex-wrap gap-4">
      {restaurantData.map((restaurant) => {
      {/* {restaurants.map((restaurant) => { */}
        return (
          <Restaurantcard
          key = {restaurant?.info?.id}
            // imgUrl={IMG_URL + restaurant?.info?.cloudinaryImageId}
            // title={restaurant?.info?.name}
            // starRating={restaurant?.info?.avgRating}
            // deliveryTime={restaurant?.info?.sla?.deliveryTime}
            // cuisines={restaurant?.info?.cuisines.join(", ")}
            // location={restaurant?.info?.areaName}
            {...restaurant?.info}
            />
          );
        })}
      </div>
    </>
    );
  };
  
  
export default Cardcontainer;