// const Restaurantcard = ({imgUrl, title, starRating, deliveryTime, cuisines, location}) => {
  // imgUrl, title, starRating, deliveryTime, cuisines, location
import { IMG_URL } from "../const/config";
import { Link } from "react-router-dom";
import { HostUrl } from "../constants/restaurants";

const Restaurantcard = ({cloudinaryImageId, name, avgRating, sla, cuisines, areaName, id}) => {

    return(
      <Link to={`/menu/${id}`} className="custom-card text-decoration-none text-dark">
        <div className="top mb-2">
          <img 
         src={IMG_URL + cloudinaryImageId}
        />
        </div>
        <div className="px-2">
        <h5 className="name">{name}</h5>
        <div className="d-flex justify-content-between">
        <div><i class="fa-solid fa-star-half-stroke"></i>{avgRating}</div>
          <div>{sla?.deliveryTime}min</div>
        </div>    
        <div className="text-secondary card-cuisine ">{cuisines.join(", ")}</div>
        <div>{areaName}</div>
        </div>
      </Link>
    );
  };
export default Restaurantcard;