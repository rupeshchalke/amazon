import { useState } from "react";

  const Filter = ({collection, updater}) =>{
    const [restaurantData, setRestaurantData] = useState([]);
    const [restaurantCollection, setRestaurantCollection] = useState([]);

  const handleDelivery = (time) =>{
    const filterdData = restaurantCollection.filter((restaurant)=>{
      return restaurant?.info?.sla?.deliveryTime <=30
    })
    setRestaurantData(filterdData);
  }
  
  const handleVeg = (green) =>{
    const filterdData = restaurantCollection.filter((restaurant)=>{
      return restaurant?.info?.veg
    })
    setRestaurantData(filterdData);
  }
  
  const handleRating = (rate) =>{
    const filterdData = restaurantCollection.filter((restaurant)=>{
      return restaurant?.info?.avgRating >=4.5
    })
    setRestaurantData(filterdData);
  }
  
  const reset = () =>{
  updater(collection)
    }




    return(
      <div className="d-flex gap-3 h-25">
      <button className="btn btn-sm btn-primary" onClick={handleDelivery}>Fast Delivery</button>
      <button className="btn btn-sm btn-success" onClick={handleVeg}>Pure Veg</button>
      <button className="btn btn-sm btn-danger" onClick={handleRating}>Top rated</button>
      <button className="btn btn-sm btn-dark" onClick={reset}>Show all</button>
    </div>
    )
  }

  export default Filter ;
  