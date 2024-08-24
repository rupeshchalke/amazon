import NormalMenu from "./NormalMenu";
const NestedMenu = ({collection}) =>{
    return(
        <div>
        <h4>{collection?.card?.card?.title}</h4>
        {
            collection?.card?.card?.categories.map((subCategory)=>{
                return(
                    <>
                    {/* <h5>{subCategory?.title}</h5>
                    {
                        subCategory?.itemCards.map((dish)=>{
                            return(
                                <>
                                <MenuSection
                                name={dish?.card?.info?.name}
                                costForTwo={dish?.card?.info?.defaultPrice / 100 || dish?.card?.info?.price / 100}
                                isVeg={dish?.card?.info?.isVeg}
                                ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount}
                                avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating}
                                description={dish?.card?.info?.description}
                                ImageUrl={dish?.card?.info?.imageId}
                                /> 
                                <hr/>
                                </> 
                            )
                        })} */}
                    <NormalMenu normalCollection={subCategory}
                    isNested={true}/>
                    </>
                );
            })}
    </div>
    )
}

export default NestedMenu;