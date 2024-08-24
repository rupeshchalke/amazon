import MenuSection from "./MenuSection";
import { useState } from "react";

const NormalMenu = ({normalCollection, isActive, toggleFunction, isNested}) =>{
    const[showList, setshowList] = useState(false)
            return(
                <>
                <h5 key={normalCollection?.card?.card?.ittle} className="bg-danger p-3" onClick={isNested ? ()=>setshowList(!showList) : toggleFunction}>
                    {isNested ? normalCollection?.title : normalCollection?.card?.card?.title}</h5>

                {isNested ? normalCollection?.itemCards.map((dish)=>{
                    return(
                        showList && <>
                        <MenuSection
                        name={dish?.card?.info?.name}
                        costForTwo={dish?.card?.info?.defaultPrice/100 || dish?.card?.info?.price/100}
                        isVeg={dish?.card?.info?.isVeg}
                        ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount}
                        avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating}
                        description={dish?.card?.info?.description}
                        ImageUrl={dish?.card?.info?.imageId}
                        /> 
                        <hr/>
                        </>  
                    );
                }):
                normalCollection?.card?.card?.itemCards.map((dish)=>{
                    return(
                        isActive && <>
                        <MenuSection
                        name={dish?.card?.info?.name}
                        costForTwo={dish?.card?.info?.defaultPrice/100 || dish?.card?.info?.price/100}
                        isVeg={dish?.card?.info?.isVeg}
                        ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount}
                        avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating}
                        description={dish?.card?.info?.description}
                        ImageUrl={dish?.card?.info?.imageId}
                        /> 
                        <hr/>
                        </>
                    );
                })}
                 </>
            );
        }

export default NormalMenu;