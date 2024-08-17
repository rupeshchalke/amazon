import { useState, useEffect } from "react";

const useMenu = (id) =>{
    //logic fetch menu data//
    const [menuData, setMenuData] = useState([])
    useEffect(()=>{
        const getMenu = async() =>{
     try{
         const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
         const json = await data.json();
        //  setLoading(false);
         setMenuData(json?.data?.cards);
         console.log("json",json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
   }
   catch(error){
           console.log("menu api error",error)
       }
    }
 
       getMenu();
     },[]);
    
    
    return menuData
}

export default useMenu