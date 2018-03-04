import React from 'react';
import PropTypes from 'prop-types';

import Canvas from '../Canvas';
import PositionControlsContainer from '../PositionControlsContainer';
import ProjectionControlsContainer from '../ProjectionControlsContainer';
import CurvesEditorContainer from '../CurvesEditorContainer';
import FractalGenerationControlContainer from '../FractalGenerationControlContainer'
import InfoContainer from '../InfoContainer';
import {height, width} from '../../common/canvas-settings';
import { 
    GEOMETRY_MODE,
    CURVES_MODE,
    FRACTALS_MODE,
    GEOMETRY_3D_MODE,
    SURFACE_MODE
} from '../../common/modes';

import './graphics.scss';

const Graphics = (props) => (
    <div className="row">
        <div className="col-md-12 col-lg-5">
            <Canvas width={width} height={height}
                    figure={props.figure}
                    is3dMode={props.mode === GEOMETRY_3D_MODE || props.mode === SURFACE_MODE}
                    projector={props.projector}
                    debug={props.debug} />
        </div>
        <div className="col-md-6 col-lg-3">
            <div className="control-block">
                <h6>Controls</h6>
                <PositionControlsContainer
                    rotateAngle={props.rotateAngle}
                    scaleStep={props.scaleStep}
                    shiftStep={props.shiftStep}/>
            </div>
            <div className="control-block">
                <h6>Info</h6>
                <InfoContainer />
            </div>
        </div>
        <div className="col-md-6 col-lg-3">
            {props.mode === GEOMETRY_MODE && (
                <div className="control-block">
                    <h6>Projection</h6>
                    <ProjectionControlsContainer />
                </div>
            )}

            {props.mode === CURVES_MODE && (
                <div className="control-block">
                    <h6>Lines</h6>
                    <CurvesEditorContainer
                        lines={props.figure.adjustedCurves} />
                </div>
            )}

            {props.mode === FRACTALS_MODE && (
                <div className="control-block">
                    <h6>Generation</h6>
                    <FractalGenerationControlContainer />
                </div>
            )}

            {props.mode === SURFACE_MODE && (
                <div className="control-block">
                    <h6>Curve controls</h6>
                    <PositionControlsContainer
                        mode={CURVES_MODE}
                        rotateAngle={props.rotateAngle}
                        scaleStep={props.scaleStep}
                        shiftStep={props.shiftStep}/>
                </div>
            )}
        </div>
    </div>
);

Graphics.propTypes = {
    rotateAngle: PropTypes.number.isRequired,
    scaleStep: PropTypes.number.isRequired,
    shiftStep: PropTypes.number.isRequired,

    projector: PropTypes.func.isRequired,

    debug: PropTypes.bool.isRequired,

    mode: PropTypes.string.isRequired,

    figure: PropTypes.shape({
        render: PropTypes.func.isRequired,
        adjustedCurves: PropTypes.arrayOf(PropTypes.shape({
            A: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired
            }).isRequired,
            B: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired
            }).isRequired,
            C: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired
            }).isRequired,
            f: PropTypes.number.isRequired
        }))
    }).isRequired
};

export default Graphics;