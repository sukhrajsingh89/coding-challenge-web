import React,{FC} from "react";

interface IError {
    error:string
}

const ErrorComponent:FC<IError> =({error}) =>{

    return <h3 data-testid="error">{error}</h3>

}

export default ErrorComponent