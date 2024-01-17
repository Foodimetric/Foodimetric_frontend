import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return(
        <div>
            <h1>Uh oh! We've got a problem</h1>
        </div>
    )
    
}
 
export default Error;