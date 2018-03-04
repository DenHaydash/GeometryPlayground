import React  from 'react';
import PropTypes from 'prop-types';

import {
    GEOMETRY_MODE,
    GEOMETRY_3D_MODE,
    SURFACE_MODE
} from '../../common/modes';

const PositionControls = (props) => (
    <div>
        <div className="controls-group">
            <button type="button" className="btn btn-light controls-group__control" title="Rotate left" onClick={props.onRotateLeft}>
                <i className="fa fa-undo" aria-hidden="true" />
            </button>
            <button type="button" className="btn btn-light controls-group__control" title="Move up" onClick={props.onMoveUp}>
                <i className="fa fa-arrow-up" aria-hidden="true" />
            </button>
            <button type="button" className="btn btn-light controls-group__control" title="Rotate right" onClick={props.onRotateRight}>
                <i className="fa fa-repeat" aria-hidden="true" />
            </button>
        </div>
        <div className="controls-group">
            <button type="button" className="btn btn-light controls-group__control" title="Move left" onClick={props.onMoveLeft}>
                <i className="fa fa-arrow-left" aria-hidden="true" />
            </button>
            <button type="button" className="btn btn-light controls-group__control" title="Move down" onClick={props.onMoveDown}>
                <i className="fa fa-arrow-down" aria-hidden="true" />
            </button>
            <button type="button" className="btn btn-light controls-group__control" title="Move right" onClick={props.onMoveRight}>
                <i className="fa fa-arrow-right" aria-hidden="true" />
            </button>
        </div>
        {props.mode === GEOMETRY_MODE && (
            <div>
                <div className="controls-group">
                    <button type="button" className="btn btn-light controls-group__control" title="Scale X up" onClick={props.onZoomInX}>
                        <i className="fa fa-search-plus" aria-hidden="true" /> X
                    </button>
                    <button type="button" className="btn btn-light controls-group__control" title="Scale Y up" onClick={props.onZoomInY}>
                        <i className="fa fa-search-plus" aria-hidden="true" /> Y
                    </button>
                    <button type="button" className="btn btn-light controls-group__control" title="Scale up" onClick={props.onZoomIn}>
                        <i className="fa fa-search-plus" aria-hidden="true" />
                    </button>
                </div>
                <div className="controls-group">
                    <button type="button" className="btn btn-light controls-group__control" title="Scale X down" onClick={props.onZoomOutX}>
                        <i className="fa fa-search-minus" aria-hidden="true" /> X
                    </button>
                    <button type="button" className="btn btn-light controls-group__control" title="Scale Y down" onClick={props.onZoomOutY}>
                        <i className="fa fa-search-minus" aria-hidden="true" /> Y
                    </button>
                    <button type="button" className="btn btn-light controls-group__control" title="Scale down" onClick={props.onZoomOut}>
                        <i className="fa fa-search-minus" aria-hidden="true" />
                    </button>
                </div>
                <div className="controls-group">
                    <button type="button" className="btn btn-light controls-group__control" title="Flip horizontally" onClick={props.onHorizontalFlip}>
                        <i className="fa fa-arrows-h" aria-hidden="true" />
                    </button>
                    <button type="button" className="btn btn-light controls-group__control" title="Flip vertically" onClick={props.onVerticalFlip}>
                        <i className="fa fa-arrows-v" aria-hidden="true" />
                    </button>
                </div>
            </div>
        )}
        {(props.mode === GEOMETRY_3D_MODE || props.mode === SURFACE_MODE) && (
            <div>
                <div className="controls-group">
                    <button type="button" className="btn btn-light controls-group__control" title="Move top" onClick={props.onMoveTop}>
                        <i className="fa fa-arrow-up" aria-hidden="true" /> Up
                    </button>
                    <button type="button" className="btn btn-light controls-group__control" title="Move bottom" onClick={props.onMoveBottom}>
                        <i className="fa fa-arrow-down" aria-hidden="true" /> Down
                    </button>
                </div>
            </div>
        )}
        <div className="controls-group">
            <button type="button" className="btn btn-danger controls-group__control" title="Reset" onClick={props.onReset}>
                Reset
            </button>
        </div>
        {(props.mode === GEOMETRY_3D_MODE || props.mode === SURFACE_MODE) && (
            <div>
                <div className="controls-group">
                    <button type="button" className="btn btn-light controls-group__control" title="Rotate alpha left" onClick={props.onRotateAlphaLeft}>
                        <i className="fa fa-undo" aria-hidden="true" /> α
                    </button>
                    <button type="button" className="btn btn-light controls-group__control" title="Rotate alpha right" onClick={props.onRotateAlphaRight}>
                        <i className="fa fa-repeat" aria-hidden="true" /> α
                    </button>
                </div>
                <div className="controls-group">
                    <button type="button" className="btn btn-light controls-group__control" title="Rotate beta left" onClick={props.onRotateBetaRight}>
                        <i className="fa fa-undo" aria-hidden="true" /> β
                    </button>
                    <button type="button" className="btn btn-light controls-group__control" title="Rotate beta right" onClick={props.onRotateBetaLeft}>
                        <i className="fa fa-repeat" aria-hidden="true" /> β
                    </button>
                </div>
                <div className="controls-group">
                    <button type="button" className="btn btn-danger controls-group__control" title="Reset" onClick={props.onResetAngles}>
                        Reset
                    </button>
                </div>
            </div>
        )}
    </div>
);

PositionControls.propTypes = {
    onMoveLeft: PropTypes.func.isRequired,
    onMoveRight: PropTypes.func.isRequired,
    onMoveUp: PropTypes.func.isRequired,
    onMoveDown: PropTypes.func.isRequired,
    onMoveTop: PropTypes.func.isRequired,
    onMoveBottom: PropTypes.func.isRequired,

    onRotateLeft: PropTypes.func.isRequired,
    onRotateRight: PropTypes.func.isRequired,

    onRotateAlphaLeft: PropTypes.func.isRequired,
    onRotateAlphaRight: PropTypes.func.isRequired,

    onRotateBetaLeft: PropTypes.func.isRequired,
    onRotateBetaRight: PropTypes.func.isRequired,

    onZoomInX: PropTypes.func.isRequired,
    onZoomOutX: PropTypes.func.isRequired,
    onZoomInY: PropTypes.func.isRequired,
    onZoomOutY: PropTypes.func.isRequired,
    onZoomIn: PropTypes.func.isRequired,
    onZoomOut: PropTypes.func.isRequired,

    onHorizontalFlip: PropTypes.func.isRequired,
    onVerticalFlip: PropTypes.func.isRequired,

    onReset: PropTypes.func.isRequired,
    onResetAngles: PropTypes.func.isRequired,

    rotateAngle: PropTypes.number.isRequired,
    scaleStep: PropTypes.number.isRequired,
    shiftStep: PropTypes.number.isRequired,

    mode: PropTypes.string.isRequired
};

export default PositionControls;