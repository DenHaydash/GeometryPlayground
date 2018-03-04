import React from 'react';
import {observer} from 'mobx-react';
import PropTypes from "prop-types";

import {
    GEOMETRY_MODE,
    GEOMETRY_3D_MODE,
    SURFACE_MODE
} from '../../common/modes';

const Info = (props) => (
    <div>
        {(props.mode === GEOMETRY_3D_MODE || props.mode === SURFACE_MODE) && (
            <div>
                <div>
                    <b>Angle α: </b>
                    {props.angleAlpha}°
                </div>
                <div>
                    <b>Angle β: </b>
                    {props.angleBeta}°
                </div>
            </div>
        )}

        <div>
            <div>
                <b>Shift: </b>
                {`{x: ${props.shift.x}, y: ${props.shift.y}, z: ${props.shift.z}}`}
            </div>

            {props.mode === GEOMETRY_MODE && (
                <div>
                    <b>Scale: </b>
                    {`{x: ${props.scale.x.toFixed(1)}, y: ${props.scale.y.toFixed(1)}}`}
                </div>
            )}

            <div>
                <b>Angle: </b>
                {props.angle}°
            </div>

            {props.mode === GEOMETRY_MODE && (
                <div>
                    <div>
                        <b>Horizontal symmetry: </b>
                        {props.horizontalSymmetry.toString()}
                    </div>
                    <div>
                        <b>Vertical symmetry: </b>
                        {props.verticalSymmetry.toString()}
                    </div>
                </div>
            )}

            {props.mode === SURFACE_MODE && (
                <div>
                    <div>
                        <b>Curve shift: </b>
                        {`{x: ${props.curveShift.x}, y: ${props.curveShift.y}}`}
                    </div>
                    <div>
                        <b>Curve angle: </b>
                        {props.curveAngle}°
                    </div>
                </div>
            )}
        </div>
    </div>
);

Info.propTypes = {
    shift: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        z: PropTypes.number.isRequired
    }).isRequired,
    scale: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }).isRequired,
    angle: PropTypes.number.isRequired,
    angleAlpha: PropTypes.number.isRequired,
    angleBeta: PropTypes.number.isRequired,
    horizontalSymmetry: PropTypes.bool.isRequired,
    verticalSymmetry: PropTypes.bool.isRequired,
    curveShift: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        z: PropTypes.number.isRequired
    }).isRequired,
    curveAngle: PropTypes.number.isRequired,
    mode: PropTypes.string.isRequired
};

export default observer(Info)