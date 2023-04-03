import React from 'react';

const Hello = ({name, age}) => {
    return (
        <div>
            <p>
                Hello {name}   
            </p>  
            <p>
               Age {age} 
            </p>    
        </div>
    );
};

export default Hello;