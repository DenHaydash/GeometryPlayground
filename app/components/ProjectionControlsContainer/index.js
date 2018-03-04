import { observer, inject } from 'mobx-react';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import mapProps from 'recompose/mapProps';

import ProjectionControls from '../ProjectionControls';

const ProjectionControlsContainer =  compose(
    inject('rootStore'),
    observer,
    mapProps(({rootStore: {
        projectionStore
    }}) => ({
        onAffineCoeffsReset: projectionStore.resetAffineCoeffs,
        onAffineCoeffChange: projectionStore.setAffineCoeffs,
        affineCoeffs: projectionStore.affineCoeffs,

        onProjectiveCoeffsReset: projectionStore.resetProjectiveCoeffs,
        onProjectiveCoeffChange: projectionStore.setProjectiveCoeffs,
        projectiveCoeffs: projectionStore.projectiveCoeffs,

        onProjectionSelect: projectionStore.setProjectionType,
        projectionType: projectionStore.projectionType
    })),
    withHandlers({
        onProjectionSelect: props => (e) => {
            props.onProjectionSelect(e.target.value);
        },
        onAffineCoeffChange: props => (e) => {
            const value = e.target.value;

            if (!value) {
                return;
            }

            props.onAffineCoeffChange(e.target.name, +value);
        },
        onProjectiveCoeffChange: props => (e) => {
            const value = e.target.value;

            if (!value) {
                return;
            }

            props.onProjectiveCoeffChange(e.target.name, +value);
        }
    })
)(ProjectionControls);

export default ProjectionControlsContainer