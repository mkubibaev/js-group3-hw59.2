import React from 'react';

const Joke = props => {
    return (
        <div className="joke">
            <img src={props.icon} alt="Chuck"/>
            <p>{props.value}</p>
        </div>
    );
};

export default Joke;