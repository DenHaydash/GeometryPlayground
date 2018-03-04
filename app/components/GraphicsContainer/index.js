import { observer, inject } from 'mobx-react';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import withProps from 'recompose/withProps';
import lifecycle from 'recompose/lifecycle';
import { withRouter } from 'react-router-dom';

import Graphics from '../Graphics';
import figureFactory from '../../figures/factory';
import { COCK_CURVE_NAME } from '../../figures/factory/names';
import shift from '../../transforms/shift';
import symmetry from '../../transforms/symmetry';
import scale from '../../transforms/scale';
import rotate from '../../transforms/rotate';

import {
    GEOMETRY_MODE,
    CURVES_MODE,
    FRACTALS_MODE,
    GEOMETRY_3D_MODE,
    SURFACE_MODE,
    modeToFigureName,     
} from '../../common/modes';

export default compose(
    withRouter,
    inject('rootStore'),
    observer,
    mapProps(({rootStore: {
        positionStore, projectionStore, curvesStore, modeStore, fractalsStore, surfaceProjectionStore
    }, history}) => ({
        mode: modeStore.mode,
        onSetMode: modeStore.setMode,        

        shift: positionStore.shift,
        angle: positionStore.angle,
        scale: positionStore.scale,        
        horizontalSymmetry: positionStore.horizontalSymmetry,
        verticalSymmetry: positionStore.verticalSymmetry,

        projector: projectionStore.projector,

        lineAdjustments: curvesStore.lineAdjustments,
        debug: curvesStore.debugMode,        

        fractalGeneration: fractalsStore.generation,

        innerShift: surfaceProjectionStore.shift,
        innerAngle: surfaceProjectionStore.angle,

        history
    })),
    mapProps(props => {
        const figure = figureFactory(modeToFigureName(props.mode));

        figure.withTransform(shift(props.shift))
            .withTransform(rotate(props.angle));

        if (props.mode === GEOMETRY_MODE) {
            if (props.horizontalSymmetry) {
                figure.withTransform(symmetry(false));
            }

            if (props.verticalSymmetry) {
                figure.withTransform(symmetry(true));
            }

            figure.withTransform(scale(props.scale));
        }

        if (props.mode === GEOMETRY_3D_MODE 
            || props.mode === GEOMETRY_MODE 
            || props.mode === SURFACE_MODE) {
            figure.withProjection(props.projector);
        }

        if (props.mode === CURVES_MODE) {
            figure.withLineAdjustments(props.lineAdjustments);
        }

        if (props.mode === FRACTALS_MODE) {
            figure.setGeneration(props.fractalGeneration);
        }

        if (props.mode === SURFACE_MODE) {
            const innerFigure = figureFactory(COCK_CURVE_NAME);
            innerFigure.withTransform(shift(props.innerShift))
                .withTransform(rotate(props.innerAngle));

            figure.addFigure(innerFigure);
        }

        return {
            figure,            
            projector: props.projector,
            onSetMode: props.onSetMode,
            mode: props.mode,            
            debug: props.debug,
            history: props.history
        };
    }),
    withProps({
        shiftStep: 5,
        rotateAngle: 10,
        scaleStep: 0.1
    }),
    lifecycle({
        componentDidMount() {
            const onRouteChanged = (pathname) => {
                this.props
                    .onSetMode(pathname.slice(1) || GEOMETRY_MODE);
            };

            this._historyListenerDisposer = this.props.history.listen(({pathname}) => {
                onRouteChanged(pathname);
            });

            onRouteChanged(this.props.history.location.pathname);            
        },
        componentWillUnmount() {
            this._historyListenerDisposer();
        }
    })
)(Graphics)