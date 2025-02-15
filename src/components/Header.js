import Logo from "../assets/images/cook.png";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import { UserContext } from "../utils/UserContext"

const Header = () =>{
  const isOnline = useOnline();
  console.log("online status", isOnline);
    return(
  <nav className="navbar p-0 navbar-expand-sm bg-light navbar-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="">
        <img src={Logo} alt="logo" width="70px"/>
        <span className="p-1">{isOnline? <i class="fa-solid fa-globe"></i> : <i class="fa-solid fa-power-off"></i>}</span>
        </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="" className="nav-link">Home <i class="fa-solid fa-house"></i></Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/about">About us🧨</a> */}
            <Link to ="/about" className="nav-link">About us <i class="fa-solid fa-address-card"></i></Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/contact">Contact us📞</a> */}
            <Link to ="/contact" className="nav-link">Contact us <i class="fa-solid fa-phone"></i></Link>
          </li>
          <li className="nav-item">
            <Link to ="/instamart" className="nav-link">Instamart <i class="fa-brands fa-instalod"></i></Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/cart">Cart🛒</a> */}
            <Link to ="/cart" className="nav-link">Cart <i class="fa-solid fa-cart-shopping"></i></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
  }

  export default Header;
