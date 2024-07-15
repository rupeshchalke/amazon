import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Cardcontainer = () => {
const [count,setCount] = useState(0)
const [restaurantData,setRestaurantData] = useState([]);
const [loading, setLoading] = useState(true)
const [restaurantCollection, setRestaurantCollection] = useState([]);
const [searchtext,setSearchtext] = useState("");
const [isFailed, setIsFailed] = useState(false)
console.log("restaurantList",restaurantData);

const handleSearchText = (event) =>{
  console.log("function is called",searchtext)
  setSearchtext(event.target.value)
}
  
const filterData = () =>{
  const filterdData = restaurantCollection.filter((restaurant)=>{
    return restaurant?.info?.name.toLowerCase().includes(searchtext.toLowerCase())
  })
  console.log("filterData",filterData)
  setRestaurantData(filterdData);
}

const handleDelivery = () =>{
  const filterdData = restaurantCollection.filter((restaurant)=>{
    return restaurant?.info?.sla?.deliveryTime <=30
  })
  setRestaurantData(filterdData);
}

const handleVeg = () =>{
  const filterdData = restaurantCollection.filter((restaurant)=>{
    return restaurant?.info?.veg
  })
  setRestaurantData(filterdData);
}

const handleRating = () =>{
  const filterdData = restaurantCollection.filter((restaurant)=>{
    return restaurant?.info?.avgRating >=4.5
  })
  setRestaurantData(filterdData);
}

const reset = () =>{
setRestaurantData(restaurantCollection)
  }


useEffect(()=>{
  const getRestaurants = async() =>{
    try{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setLoading(false);
    console.log("json",json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurantCollection(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  catch(err){
    setLoading(false)
    setIsFailed(true)
    console.log("Something Went Wrong",err)
  }
}

  getRestaurants();
},[]);

console.log("component is rendered");

if(loading){
  return(
  <div className="container d-flex flex-wrap gap-4">
  <Shimmer/>
  </div>)
}

if(isFailed){
  return(
    <div>
<img src="https://www.ecommerce-nation.com/wp-content/uploads/2018/10/404-error.jpg" className="center"></img>  
  </div>
  )
}

  return (
    <div>
     <div className="container">
      <div className="d-flex justify-content-between align-items-center">
      <div className=" d-flex my-3 w-50">
        <input type="text" 
        className="custom-input p-2 " 
        placeholder="Enter name of restaurant"
        value={searchtext}
        onChange={handleSearchText}/>
        <button className="btn btn-light pt-2" onClick={filterData}>🔍</button>
      </div>
        <div className="d-flex gap-3 h-25">
        <button className="btn btn-sm btn-primary" onClick={handleDelivery}>Fast Delivery</button>
        <button className="btn btn-sm btn-success" onClick={handleVeg}>Pure Veg</button>
        <button className="btn btn-sm btn-danger" onClick={handleRating}>Top rated</button>
        <button className="btn btn-sm btn-dark" onClick={reset}>Show all</button>
      </div>
      </div>

      <div className="container d-flex flex-wrap gap-4">
       {(restaurantData.length!==0) ? restaurantData.map((restaurant) => {
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

        }) : <img src="https://st.depositphotos.com/1006899/2650/i/950/depositphotos_26505551-stock-photo-error-metaphor.jpg"></img>}
        </div>
  </div>

  </div>
      );
    };
  
export default Cardcontainer