import React from 'react';
import PropTypes from 'prop-types';

const FractalGenerationControl = (props) => (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className={`btn btn-primary ${props.generation === 0 && 'active'}`}>
            <input type="radio" name="options" 
                checked={props.generation === 0} 
                value="0" 
                onChange={props.handleSetGeneration} /> 0
        </label>
        <label className={`btn btn-primary ${props.generation === 1 && 'active'}`}>
            <input type="radio" name="options" 
                checked={props.generation === 1} 
                value="1"
                onChange={props.handleSetGeneration} /> 1
        </label>
        <label className={`btn btn-primary ${props.generation === 2 && 'active'}`}>
            <input type="radio" name="options"
                checked={props.generation === 2} 
                value="2"
                onChange={props.handleSetGeneration} /> 2
        </label>
        <label className={`btn btn-primary ${props.generation === 3 && 'active'}`}>
            <input type="radio" name="options" 
                checked={props.generation === 3} 
                value="3"
                onChange={props.handleSetGeneration} /> 3
        </label>
    </div>
);

FractalGenerationControl.propTypes = {
    generation: PropTypes.number.isRequired,
    handleSetGeneration: PropTypes.func.isRequired
};

export default FractalGenerationControl;