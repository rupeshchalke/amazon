import Carousel from "./Carousel";
import Filters from "./Filter";
import Searchbar from "./Searchbar";
import Cardcontainer from "./Cardcontainer";

const Body=()=>{
    return(
      <>
      <div className='text-center'>this is body</div>
      <Carousel/>
      <div className='d-flex justify-content-between'>
        {/* <Filters/> */}
        {/* <Searchbar/> */}
      </div>
        <Cardcontainer/>
        </>
    )
  }

  export default Body;
