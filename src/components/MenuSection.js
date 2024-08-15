import { IMG_URL } from "../const/config"

const MenuSection = ({name, costForTwo, isVeg, ratingCount, avgRating, description, ImageUrl}) =>{
    return(
<div className="d-flex justify-content-betwwen">

    <div>
<p>{isVeg ? "🟢" : "🔴"}</p>
<h6>{name}</h6>
<h6>Rs. {costForTwo}</h6>
<p className="text-success">⭐{avgRating}<span className="text-secondary">{ratingCount}</span></p>
<p className="text-secondary">{description}</p>
  </div>

    <div>
<img style={{width:"150px", height:"150px" , objectFit:"cover"}} src={IMG_URL + ImageUrl}></img>
    </div>

</div>
    )
}

export default MenuSection