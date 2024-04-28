import React from 'react';
import { Outlet } from 'react-router';

const AnthroLayout = () => {
    return ( 
        <p>
              <h1>Search Section</h1>
            <Outlet /> 
        </p>
    );
}
 
export default AnthroLayout;