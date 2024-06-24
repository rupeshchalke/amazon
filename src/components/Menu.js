import { useParams } from "react-router-dom";
import { MENU_URL } from "../const/config";
import { useEffect } from "react";

const Menu = () =>{
    const params = useParams();
    console.log("params",params);
    return(
        <div>
            Menu
        </div>
    )
}

export default Menu;