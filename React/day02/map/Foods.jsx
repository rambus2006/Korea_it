import React from 'react';
import Food from './Food';

const Foods = (props) => {


    return (
        <div>
            {props.foods.map((food) => <Food style={props.style} food={food} />)}
        </div>
    );
};

export default Foods;