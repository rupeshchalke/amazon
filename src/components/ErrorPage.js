import { useRouteError } from "react-router-dom"

const ErrorPage=()=>{
    const errorObject = useRouteError()
    console.log("errorobject",errorObject)
    return(
        <div className="error">
        <div className="text-danger d-flex flex-column justify-content-center align-items-center">
            <h1>Oops Something  Went Wrong🌋🌋</h1>
            <h2>Status: {errorObject?.status} {errorObject.statusText}</h2>
            <h3>{errorObject?.data}</h3>
        </div>
        </div>
    )
}

export default ErrorPage;