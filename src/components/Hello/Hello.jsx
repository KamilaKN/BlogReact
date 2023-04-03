import React from 'react';

const Hello = (props) => {
    return (
        <div>
            <p>
                Hello {props.name}   
            </p>  
            <p>
               Age {props.age} 
            </p>    
        </div>
    );
};

export default Hello;