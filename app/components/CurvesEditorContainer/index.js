import { observer, inject } from 'mobx-react';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withProps from 'recompose/withProps';
import withHandlers from 'recompose/withHandlers';
import mapProps from 'recompose/mapProps';
import pure from 'recompose/pure';

import CurvesEditor from "../CurvesEditor";

export default compose(
    inject('rootStore'),
    observer,
    mapProps(({rootStore: {
        curvesStore
    }, lines}) => ({
        lines,
        debug: curvesStore.debugMode,
        onLineUpdate: curvesStore.addLineAdjustment,
        onLineReset: curvesStore.resetLineAdjustment,
        onToggleDebugMode: curvesStore.toggleDebugMode
    })),
    withState('selectedLineIndex', 'selectLine', 0),
    withProps(props => ({
        selectedLine: props.lines[props.selectedLineIndex]
    })),
    withHandlers({
        onLineSelect: props => e => {
            props.selectLine(+e.target.value);
        }
    }),
    pure
)(CurvesEditor)