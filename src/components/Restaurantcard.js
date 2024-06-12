// const Restaurantcard = ({imgUrl, title, starRating, deliveryTime, cuisines, location}) => {
  // imgUrl, title, starRating, deliveryTime, cuisines, location
import { IMG_URL } from "../const/config";

const Restaurantcard = ({cloudinaryImageId, name, avgRating, sla, cuisines, areaName}) => {
    return(
      <div className="custom-card">
        <div className="mb-2">
          <img 
        //  src={imgUrl}
        //  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
         src={IMG_URL + cloudinaryImageId}
        />
        </div>
        <div className="px-2">
        <h5 className="name">{name}</h5>
        <div className="d-flex justify-content-between">
        <div>⭐{avgRating}</div>
          <div>{sla?.deliveryTime}min</div>
        </div>    
        <div className="text-secondary card-cuisine ">{cuisines.join(", ")}</div>
        <div>{areaName}</div>
        </div>
      </div>
    );
  };
export default Restaurantcard;