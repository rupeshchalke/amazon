import logo from './logo.svg';
import "./App.css";
// import logo from "./assets/images/cook.png"
import Header from "./components/Header";
import Body from "./components/Body";
import Fotter from "./components/Fotter";

// const Header = () =>{
//   return(
// <nav className="navbar p-0 navbar-expand-sm bg-light navbar-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">
//       <img src={Logo} width="70px"/>
//       </a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-link" href="#">Home🏡</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">About us🧨</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Contact us📞</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Cart🛒</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//   )
// }

// const Carousel=()=>{
//   return(
//     <div className='text-center'>this is carousel section</div>
//   )
// }

// const Filter=()=>{
//   return(
//     <div>this is filter component</div>
//   )
// }

// const Searchbar=()=>{
//   return(
//     <div>this is searchbar component</div>
//   )
// }

// const Restuarantcard=()=>{
//   return(
//     <div className='text-center'>this is Restuarantcard component</div>
//   )
// }

// const Cardcontainer=()=>{
//   return(
//     <>
//     <p className='text-center'>this is cardcontainer component</p>
//     <Restuarantcard/>
//     <Restuarantcard/>
//     <Restuarantcard/>
//     <Restuarantcard/>
//     <Restuarantcard/>
//     <Restuarantcard/>
//     <Restuarantcard/>
//     <Restuarantcard/>
//     </>
//   )
// }

// const Body=()=>{
//   return(
//     <>
//     <div className='text-center'>this is body</div>
//     <Carousel/>
//     <div className='d-flex justify-content-between'>
//       <Filters/>
//       <Searchbar/>
//     </div>
//       <Cardcontainer/>
//       </>
//   )
// }

// const Fotter = () =>{
//   return(
//     <div class="w-100 bg-dark  text-white container-fluid pt-2 pb-2">
//     <div class="row">
//       <div class="col-md-6 pt-3">
//         <p></p>
//       </div>
//       <div class="col-md-3"></div>
//       <div class="col-md-3 pt-3">
//         <ul>
//           <li  class="list-inline-item"><a href="#" class="text-white">Privacy</a></li>
//           <li  class="list-inline-item"><a href="#" class="text-white">Terms</a></li>
//           <li  class="list-inline-item"><a href="#" class="text-white">Contact</a></li>
//       </ul>
//       </div>
//     </div>  
//   </div>
//   )
// }

const App = () => {
  return(
    <>
      <Header/>
       <Body/>
       <Fotter/>
    </>
  );
}
    


export default App;
