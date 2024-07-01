import { useParams } from "react-router-dom";
import { MENU_URL } from "../const/config";
import { useEffect } from "react";

const Menu = () =>{
    const params = useParams();
    console.log("params",params);
    useEffect(()=>{
        
const getRestaurants = async() =>{
    try{
    const data = await fetch("menuUrl");
    const json = await data.json();
    // console.log("json",json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  catch(error){

  }
}

  getRestaurants();
},[]);

    return(
        <div>
            Menu
        </div>
    )
}

export default Menu;