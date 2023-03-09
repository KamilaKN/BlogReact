import React from 'react';

const Header = (props) => {
    console.log(props)
    return (
       <p>
        hello {props.name}
       </p>
    );
}

export default Header;