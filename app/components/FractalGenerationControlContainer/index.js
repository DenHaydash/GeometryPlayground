import { observer, inject } from 'mobx-react';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import withHandlers from 'recompose/withHandlers';

import FractalGenerationControl from '../FractalGenerationControl';

export default compose(
    inject('rootStore'),
    observer,
    mapProps(({rootStore: {
        fractalsStore
    }}) => ({
        onSetGeneration: fractalsStore.setGeneration,
        generation: fractalsStore.generation
    })),
    withHandlers({
        handleSetGeneration: props => e => {
            props.onSetGeneration(+e.target.value);
        }
    })
)(FractalGenerationControl)