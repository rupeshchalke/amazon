const Resinfo = ({name,avgRating,location,cuisines,ratingcount,costfortwo,deliverytime,remark}) =>{
    return(
        <div className="info_container p-3">
            <h1>{name}</h1>
            <p>⭐{avgRating} ({ratingcount}) {costfortwo}</p>
            <p className="text-danger text-decoration-underline">{cuisines}</p>
            <p>{location}</p>
            <h6 className="text-lowercase">{deliverytime}</h6>
            <p>🛴{remark.replace(/<\/?b>/g, "")}.</p>
        </div>
    )
}

export default Resinfo;
