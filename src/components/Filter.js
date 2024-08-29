  const Filter = ({masterData, updater}) =>{

  const handleDelivery = () =>{
    const filterdData = masterData.filter((restaurant)=>{
      return restaurant?.info?.sla?.deliveryTime <=30
    })
    updater(filterdData);
  }
  
  const handleVeg = () =>{
    const filterdData = masterData.filter((restaurant)=>{
      return restaurant?.info?.veg
    })
    updater(filterdData);
  }
  
  const handleRating = () =>{
    const filterdData = masterData.filter((restaurant)=>{
      return restaurant?.info?.avgRating >=4.5
    })
    updater(filterdData);
  }
  
  const reset = () =>{
  updater(masterData)
    }


    return(
      <div className="d-flex gap-3 h-25">
      <button className="btn btn-sm btn-primary" onClick={handleDelivery}>Fast Delivery</button>
      <button className="btn btn-sm btn-success" onClick={handleVeg}>Pure Veg</button>
      <button className="btn btn-sm btn-danger" onClick={handleRating}>Top rated</button>
      <button className="btn btn-sm btn-dark" onClick={reset}>Show all</button>
    </div>
    )
  }

  export default Filter ;
  