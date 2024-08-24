const Resinfo = ({name,avgRating,location,cuisines,ratingcount,costfortwo,deliverytime,remark}) =>{
    return(
        <div className="mix p-3">
            <h1>{name}</h1>
            <p><i class="fa-solid fa-star-half-stroke"></i>{avgRating} ({ratingcount}) <span>-</span> {costfortwo}</p>
            <p className="text-danger text-decoration-underline">{cuisines}</p>
            <p>{location}</p>
            <h6 className="text-lowercase">{deliverytime}</h6>
            <p><i class="fa-solid fa-bicycle"></i> {remark.replace(/<\/?b>/g, "")}.</p>
        </div>
    )
}

export default Resinfo;
