import React from 'react';

const Country = (props) => {
    const {name,region,flag} = props.name;
    return (
        <div>
            <h4>{name}</h4>
            <img src={flag} alt="" />
            <h6>{region}</h6>
        </div>
    );
};

export default Country;