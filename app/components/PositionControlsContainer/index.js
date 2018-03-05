import { observer, inject } from 'mobx-react';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import withProps from 'recompose/withProps';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';

import PositionControls from '../PositionControls';

const PositionControlsContainer = compose(
    inject('rootStore'),
    observer,
    withProps(({rootStore: {
        positionStore, projectionStore, modeStore, surfaceProjectionStore
    }, mode}) => ({
        onMove: mode === 'curves' ? surfaceProjectionStore.move : positionStore.move,
        onRotate: mode === 'curves' ? surfaceProjectionStore.rotate : positionStore.rotate,
        onScale: positionStore.zoom,
        onHorizontalFlip: positionStore.flipHorizontal,
        onVerticalFlip: positionStore.flipVertical,
        onReset: mode === 'curves' ? surfaceProjectionStore.reset : positionStore.reset,

        onRotateAngleAlpha: projectionStore.rotateAngleAlpha,
        onRotateAngleBeta: projectionStore.rotateAngleBeta,
        onResetAngles: projectionStore.resetAngles,

        mode: mode || modeStore.mode
    })),
    withHandlers({
        onMoveLeft: props => () => {
            props.onMove({x: -props.shiftStep, y: 0, z: 0});
        },
        onMoveRight: props => () => {
            props.onMove({x: props.shiftStep, y: 0, z: 0});
        },
        onMoveUp: props => () => {
            props.onMove({x: 0, y: props.shiftStep, z: 0});
        },
        onMoveDown: props => () => {
            props.onMove({x: 0, y: -props.shiftStep, z: 0});
        },
        onMoveTop: props => () => {
            props.onMove({x: 0, y: 0, z: props.shiftStep});
        },
        onMoveBottom: props => () => {
            props.onMove({x: 0, y: 0, z: -props.shiftStep});
        },

        onRotateLeft: props => () => {
            props.onRotate(props.rotateAngle);
        },
        onRotateRight: props => () => {
            props.onRotate(-props.rotateAngle);
        },

        onZoomInX: props => () => {
            props.onScale('x', props.scaleStep);
        },
        onZoomOutX: props => () => {
            props.onScale('x', -props.scaleStep);
        },
        onZoomInY: props => () => {
            props.onScale('y', props.scaleStep);
        },
        onZoomOutY: props => () => {
            props.onScale('y', -props.scaleStep);
        },
        onZoomIn: props => () => {
            props.onScale(null, props.scaleStep);
        },
        onZoomOut: props => () => {
            props.onScale(null, -props.scaleStep);
        },

        onHorizontalFlip: props => () => {
            props.onHorizontalFlip();
        },
        onVerticalFlip: props => () => {
            props.onVerticalFlip();
        },

        onRotateAlphaLeft: props => () => {
            props.onRotateAngleAlpha(props.rotateAngle);
        },
        onRotateAlphaRight: props => () => {
            props.onRotateAngleAlpha(-props.rotateAngle);
        },

        onRotateBetaLeft: props => () => {
            props.onRotateAngleBeta(props.rotateAngle);
        },
        onRotateBetaRight: props => () => {
            props.onRotateAngleBeta(-props.rotateAngle);
        },

        onRotateAnglesReset: props => () => {
            props.onResetAngles();
        },

        onReset: props => () => {
            props.onReset();
        }
    }),
    pure
)(PositionControls);

PositionControlsContainer.propTypes = {
    rotateAngle: PropTypes.number.isRequired,
    scaleStep: PropTypes.number.isRequired,
    shiftStep: PropTypes.number.isRequired
};

export default PositionControlsContainer