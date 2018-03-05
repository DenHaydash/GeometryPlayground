import { observer, inject } from 'mobx-react';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import pure from 'recompose/pure';

import Info from '../Info';

export default compose(
    inject('rootStore'),
    observer,
    mapProps(({rootStore: {
        positionStore, projectionStore, modeStore, surfaceProjectionStore
    }}) => ({
        shift: positionStore.shift,
        scale: positionStore.scale,
        angle: positionStore.angle,
        horizontalSymmetry: positionStore.horizontalSymmetry,
        verticalSymmetry: positionStore.verticalSymmetry,

        angleAlpha: projectionStore.angleAlpha,
        angleBeta: projectionStore.angleBeta,

        curveShift: surfaceProjectionStore.shift,
        curveAngle: surfaceProjectionStore.angle,

        mode: modeStore.mode
    })),
    pure
)(Info)