import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Resinfo from "./Resinfo";
import Shimmer from "./Shimmer";
import MenuSection from "./MenuSection";
import useMenu from "../hooks/useMenu";
import NormalMenu from "./NormalMenu";
import NestedMenu from "./NestedMenu";

const Menu = () =>{
    // const params = useParams();
    const {id} = useParams();
    // const [menuData, setMenuData] = useState([]);
    // const [loading, setLoading] = useState(true);
    const menuList = useMenu(id);
    console.log("custom hook data",menuList);
    const [activeIndex, setActiveIndex] = useState(0);

    // const menuList = useMenu();
//     useEffect(()=>{
//        const getMenu = async() =>{
//     try{
//         const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
//         const json = await data.json();
//         setLoading(false);
//         setMenuData(json?.data?.cards);
//         console.log("json",json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
//   }
//   catch(error){
//           console.log("menu api error",error)
//       }
//    }

//       getMenu();
//     },[]);

    if(menuList.length===0){
        return (
            <div className="container d-flex flex-wrap gap-4">
        <Shimmer/>
        </div>
        );
    }

    const menuCategories = menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;


    const normalMenu = menuCategories.filter((menuCategory)=>{
        return(
            menuCategory?.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    });

    const nestedMenu = menuCategories.filter((menuCategory)=>{
        return(
            menuCategory?.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
    });

    console.log("normalMenu",normalMenu);
    console.log("nestedMenu",nestedMenu);


    const {
        name,
        avgRating, 
        totalRatingsString, 
        areaName, 
        costForTwoMessage, 
        cuisines, 
        sla, 
        expectationNotifiers 
    } = menuList[2]?.card?.card?.info;
    const {slaString, lastMileTravelString} = sla;
    const {enrichedText} = expectationNotifiers[0]
    const showDetails = (val)=>{
        if(activeIndex===val){
          setActiveIndex(-1)
        }
        else
        {
          setActiveIndex(val);
        }
      }

    return(

        <div className="menu_container p-4">

            <Resinfo
            name={name}
            avgRating={avgRating}
            ratingcount={totalRatingsString}
            costfortwo={costForTwoMessage}
            cuisines={cuisines.join(", ")}
            location={areaName}
            deliverytime={slaString}
            distance={lastMileTravelString}
            remark={enrichedText} 
            />
            
            <div className="p-3">
                {normalMenu.map((normalCategory, index)=>{
                        return(
                            <NormalMenu normalCollection={normalCategory} isActive={activeIndex===index}
                            toggleFunction={()=>showDetails(index)}/>
                        );
                    })}
            </div>

            <div>
                {nestedMenu.map((category)=>{
                        return(
                            <NestedMenu collection={category}/>
                            // <div>
                            //     <h4>{category?.card?.card?.title}</h4>
                            //     {
                            //         category?.card?.card?.categories.map((subCategory)=>{
                            //             return(
                            //                 <>
                            //                 <h5>{subCategory?.title}</h5>
                            //                 {
                            //                     subCategory?.itemCards.map((dish)=>{
                            //                         return(
                            //                             <>
                            //                             <MenuSection
                            //                             name={dish?.card?.info?.name}
                            //                             costForTwo={dish?.card?.info?.defaultPrice / 100 || dish?.card?.info?.price / 100}
                            //                             isVeg={dish?.card?.info?.isVeg}
                            //                             ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount}
                            //                             avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating}
                            //                             description={dish?.card?.info?.description}
                            //                             ImageUrl={dish?.card?.info?.imageId}
                            //                             /> 
                            //                             <hr/>
                            //                             </> 
                            //                         )
                            //                     })
                            //                 }
                            //             </>
                            //             )
                            //         })
                            //     }
                            // </div>
                          );
                    })}
            </div>
        </div>
    )
}

export default Menu