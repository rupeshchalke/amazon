import { IMG_URL } from "../const/config"

const MenuSection = ({name, costForTwo, isVeg, ratingCount, avgRating, description, ImageUrl}) =>{
    return(
<div className="d-flex justify-content-betwwen align-items-center">

    <div>
<p>{isVeg ? <i class="fa-solid fa-leaf"></i> : <i class="fa-solid fa-egg"></i>}</p>
<h6>{name}</h6>
<h6>Rs. {costForTwo}</h6>
{avgRating && <p className="text-success"><i class="fa-solid fa-star-half-stroke"></i>{avgRating}<span className="text-secondary">{ratingCount}</span></p>}
<p className="text-secondary">{description}</p>
  </div>

    <div>
<img style={{width:"150px", height:"150px" , objectFit:"cover", borderRadius:"20px"}} src={IMG_URL + ImageUrl}></img>
    </div>

</div>
    )
}

export default MenuSection