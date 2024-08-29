import { useState, useEffect} from "react";
import { RES_URL } from "../const/config";


const Carousel = () =>{
       const [data, setData] = useState([]);
       const [value, setValue] = useState(0)

        async function fetchData() {
            const data = await fetch(RES_URL);
            const result = await data.json();
            console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
            setData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
       }
       useEffect(() =>{
            fetchData()
       },[])

       function handlePrev(){
        if (value > 0) {
          setValue((prev) => prev - 30);
        }
    
      };
    
      function handleNext(){
        if (value < 124) {
          setValue((prev) => prev + 30);
        }
      }

    return(
        <div>
        <div className="container" style={{width:"100%"}}>
        <div className="container-fluid overflow-hidden pb-3" style={{mx:"auto"}}>
        <div className="d-flex justify-content-between pt-3">
        <h1 className="font-weight-bold">What's in your mind?</h1>
  
      <div className="d-flex gap-2">
        <div onClick={handlePrev} className="rounded-5 p-3" style={{background:"lightgrey", cursor:"pointer"}}><i class="fa-solid fa-arrow-left"></i></div>
        <div onClick={handleNext} className="rounded-5 p-3" style={{background:"lightgrey", cursor:"pointer"}}><i class="fa-solid fa-arrow-right"></i></div>
      </div>
      </div>

      <div style={{translate:`-${value}%`}} className="d-flex">

            {
                data.map((item) => (
                <img style={{width:"150px", cursor:"pointer"}} src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}/>               
             ))
            }
        </div>

       </div>
       <hr ></hr>

       </div>
</div>

    )

}

export default Carousel