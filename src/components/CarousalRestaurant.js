//"https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&collection=122381&tags=layout_FestiveEvent9&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useOnline from '../CustomHooks/useOnline';

const CarousalRestraunt = () => {
    const {caraousalId} = useParams();
    const isOnline = useOnline();
    const [loadingStatus,setLoadingStatus]=useState(true);
    const [error,setError]=useState(false);
    const [restraunts,setRestraunts] = useState([]);

    useEffect(()=>{
        (async ()=>{
            try {
                if(isOnline==false){
                  setError(true);
                  return
                } else{

                  const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&collection=${caraousalId.split("-")[0]}&tags=${caraousalId.split("-")[1]}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`,{
                   header:{
                   "Content-Type:":"application/json; charset=utf-8"
                   }
                  })

                  const data =await response.json();
                  console.log("response from Carousal Data",data);
                  setRestraunts(data?.data?.cards[0]);
                }
              } catch (error) {
                setError(true);
                // throw new Error(error);
              }
        })()
    },[])

    if(error){
        return(
          <div className="min-h-screen">
            <h1 style={{color:"red",height:"50.66dvh"}}>Something Went Wrong..</h1>
          </div>
        )
      }
  return (
    <div>

    </div>
  )
}

export default CarousalRestraunt