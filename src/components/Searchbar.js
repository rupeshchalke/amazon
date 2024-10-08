import { useState } from "react"

const Searchbar= ({collection, updater}) =>{
const [searchtext, setSearchtext] = useState("");

  const handleSearchText = (event) =>{
    console.log("function is called",searchtext)
    setSearchtext(event.target.value)
  }
    
  const filterData = () =>{
    const filterdData = collection.filter((restaurant)=>{
      return restaurant?.info?.name.toLowerCase().includes(searchtext.toLowerCase())
    })
    console.log("filterData",filterData)
    updater(filterdData);
  }
  
    return(
      <div className="top d-flex my-3 w-50">
      <input type="text" 
      className="custom-input p-2 " 
      placeholder="Enter name of restaurant"
      value={searchtext}
      onChange={handleSearchText}/>
      <button className="btn btn-primary ms-1" onClick={filterData}><i class="fa-brands fa-searchengin"></i></button>
    </div>
    )
  }

  export default Searchbar;
