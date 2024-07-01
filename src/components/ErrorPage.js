import { useRouteError } from "react-router-dom"

const ErrorPage=()=>{
    const errorObject = useRouteError()
    console.log("errorobject",errorObject)
    return(
        <div className="d-flex justify-content-center align-item-center">
             Oops Something  Went Wrong🌋🌋.<br/>
            status:{errorObject.status}<br/>
            statusText:{errorObject.statusText}<br/>
            Description:{errorObject.error.message}
        </div>
    )
}

export default ErrorPage