import { RES_URL } from "../const/config";
import { useEffect, useState } from "react";



const useRestaurant = () =>{
  //logic//
  const [restaurantData, setRestaurantData] = useState([])
  const [restaurantCollection, setRestaurantCollection] = useState([])
  const [loading, setLoading] = useState(true)
  const [isFailed, setIsFailed] = useState(false)

  useEffect(()=>{
    const getRestaurants = async() =>{
      try{
      const data = await fetch(RES_URL);
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

  const resObject = {
    resData : restaurantData,
    masterData : restaurantCollection,
    loading : loading,
    failed : isFailed,
    updater : setRestaurantData,
  }

    return resObject
}

export default useRestaurant