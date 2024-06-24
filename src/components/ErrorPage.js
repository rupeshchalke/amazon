import { useRouteError } from "react-router-dom"

const ErrorPage=()=>{
    const errorObject = useRouteError()
    console.log("errorobject",errorObject)
    return(
        <div>
            <h1 >status:{errorObject.status}</h1>
            <h1 >statusText:{errorObject.statusText}</h1>
            <h1>Description</h1>
        </div>
    )
}

export default ErrorPage