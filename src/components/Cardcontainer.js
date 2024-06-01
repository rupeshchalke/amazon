import Restaurantcard from "./Restaurantcard";
import { restaurantList } from "../const/config";
import { IMG_URL } from "../const/config";

const Cardcontainer = () => {
//   const restaurantData = [
//     {
//       imgUrl:
//         "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
//       title: "Chinese Wok",
//       starRating: "4",
//       deliveryTime: "40-45",
//       cuisines: "Chinese, Asian, Tibetan, Desserts",
//       location: "Santacruz West",
//     },
//     {
//       imgUrl: "https://images.app.goo.gl/LwagKMRxPBXR6JRJ9",
//       title: "Sangham Fast Food",
//       starRating: "3",
//       deliveryTime: "40-45",
//       cuisines: " Asian, Tibetan, Desserts",
//       location: "Worli",
//     },
//     {
//       imgUrl:
//         "https://b.zmtcdn.com/data/reviews_photos/801/6e42f1bfa8397d7105d9bc1276205801_1680257479.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
//       title: "Kubec BistrocBar",
//       starRating: "4.5",
//       deliveryTime: "40-45",
//       cuisines: "Chinese, Asian, Tibetan, Desserts",
//       location: "Powai",
//     },
//     {
//       imgUrl: "",
//       title: "Natural Ice cream ",
//       starRating: "4.5",
//       deliveryTime: "30-40",
//       Flavours: "Choco- almond,  guava, tender coconut, anjeer",
//       location: "Ghatkopar East",
//     },
//     {
//       imgUrl: "",
//       title: "China Town",
//       starRating: "4.5",
//       deliveryTime: "45-50",
//       cuisines: "Chinese",
//       location: "Vikhroli East",
//     },
//     {
//       imgUrl: "https://www.zomato.com/mumbai/radha-krishna-ghatkopar-west",
//       title: "Radha Krishna",
//       starRating: "4.9",
//       deliveryTime: "30-35",
//       cuisines: "South Indian, Asian, Tibetan, Chinese",
//       location: "Ghatkopar West",
//     },
//     {
//       imgUrl:
//         "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
//       title: "R.M HOTEL ",
//       starRating: "4",
//       deliveryTime: "40-50",
//       cuisines: "Chinese,North Indian, Mughlai, Desserts",
//       location: "Ghatkopar West",
//     },
//     {
//       imgUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qrK7sIJh2VaanAlPe1eB89Z68bK9ZUMleA&usqp=CAU",
//       title: "american dhaba",
//       starrating: "5",
//       cusines: "America, western, Indian",
//       location: "tank road",
//     },
//     {
//       imgUrl: "https://i.ytimg.com/vi/6E0QFJ3g1Yw/maxresdefault.jpg",
//       title: "Radha Krishna",
//       starRating: "4.9",
//       deliveryTime: "30-35",
//       cuisines: "South Indian, Asian, Tibetan, Chinese",
//       location: "Ghatkopar West",
//     },
//     {
//       imgUrl: " https://www.zomato.com/mumbai/urban-tadka-1-kandivali-east",
//       title: "Urban Tadka",
//       starRating: "4.5",
//       deliveryTime: "40-45",
//       cuisines: "Urban Tadka, Mughalai Biryani",
//       location: "North India",
//     },
//   ];
  console.log( "restaurantList",restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  const restaurants =restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  return (
    <div className="container d-flex flex-wrap gap-4">
      {/* {restaurantData.map((restaurant) => { */}
      {restaurants.map((restaurant) => {
        return (
          <Restaurantcard
          //   {...restaurant}
          // key = {restaurant?.info?.id}
            // imgUrl={IMG_URL + restaurant?.info?.cloudinaryImageId}
            // title={restaurant?.info?.name}
            // starRating={restaurant?.info?.avgRating}
            // deliveryTime={restaurant?.info?.sla?.deliveryTime}
            // cuisines={restaurant?.info?.cuisines.join(", ")}
            // location={restaurant?.info?.areaName}
            {...restaurant?.info}
            />
          );
        })}
      </div>
    );
  };
  
export default Cardcontainer;