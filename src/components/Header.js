import Logo from "../assets/images/cook.png"
import { Link } from "react-router-dom";

const Header = () =>{
    return(
  <nav className="navbar p-0 navbar-expand-sm bg-light navbar-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={Logo} width="70px"/>
        </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home🏡</a>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/about">About us🧨</a> */}
            <Link to ="/about" className="nav-link">About us🧨</Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/contact">Contact us📞</a> */}
            <Link to ="/contact" className="nav-link">Contact us📞</Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/cart">Cart🛒</a> */}
            <Link to ="/cart" className="nav-link">Cart🛒</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
  }

  export default Header;
