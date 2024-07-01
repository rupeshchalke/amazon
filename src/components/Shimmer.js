const Shimmer = () =>{
    return new Array(20).fill(0).map(() =>(
      <div className="custom-card">
      <div className="mb-3">
      <div className="shimmerImg"></div>
      </div>
      <h5 className="shimmerLine mb-3"></h5>
      <div className="d-flex justify-content-between mb-3">
      <div className="shimmerLine" style={{width:"50px"}}></div>
        <div className="shimmerLine" style={{width:"50px"}}></div>
      </div>    
      <div className="shimmerLine mb-2"></div>
      <div className="shimmerLine mb-2"></div>
      </div>
 ));
  };

export default Shimmer;