import React  from 'react';
import PropTypes from 'prop-types';
import DebounceInput from 'react-debounce-input';

import {
    AFFINE_PROJECTION_NAME,
    PROJECTIVE_PROJECTION_NAME,
    DEFAULT_PROJECTION_NAME
} from '../../transforms/projections/factory/names';

const ProjectionControls = (props) => (
    <div>
        <div className="form-check">
            <label className="form-check-label">
                <input className="form-check-input" name="projection" type="radio"
                       value={DEFAULT_PROJECTION_NAME}
                       onChange={props.onProjectionSelect}
                       checked={props.projectionType === DEFAULT_PROJECTION_NAME} />
                Default
            </label>
        </div>
        <div className="form-check">
            <label className="form-check-label">
                <input className="form-check-input" name="projection" type="radio"
                       value={AFFINE_PROJECTION_NAME}
                       onChange={props.onProjectionSelect}
                       checked={props.projectionType === AFFINE_PROJECTION_NAME} />
                Affine
            </label>
            {props.projectionType === AFFINE_PROJECTION_NAME && (
                <div>
                    <div className="controls-group">
                        <label className="controls-group__control">
                            A0
                            <DebounceInput type="number" className="form-control" name="a0"
                                           debounceTimeout={500}
                                           value={props.affineCoeffs.a0.toString()}
                                           onChange={props.onAffineCoeffChange} />
                        </label>
                        <label className="controls-group__control">
                            B0
                            <DebounceInput type="number" className="form-control" name="b0"
                                           debounceTimeout={500}
                                           value={props.affineCoeffs.b0.toString()}
                                           onChange={props.onAffineCoeffChange} />
                        </label>
                    </div>
                    <div className="controls-group">
                        <label className="controls-group__control">
                            A1
                            <DebounceInput type="number" className="form-control" name="a1"
                                           debounceTimeout={500}
                                           value={props.affineCoeffs.a1.toString()}
                                           onChange={props.onAffineCoeffChange} />
                        </label>
                        <label className="controls-group__control">
                            B1
                            <DebounceInput type="number" className="form-control" name="b1"
                                           debounceTimeout={500}
                                           value={props.affineCoeffs.b1.toString()}
                                           onChange={props.onAffineCoeffChange} />
                        </label>
                    </div>
                    <div className="controls-group">
                        <label className="controls-group__control">
                            A2
                            <DebounceInput type="number" className="form-control" name="a2"
                                           debounceTimeout={500}
                                           value={props.affineCoeffs.a2.toString()}
                                           onChange={props.onAffineCoeffChange} />
                        </label>
                        <label className="controls-group__control">
                            B2
                            <DebounceInput type="number" className="form-control" name="b2"
                                           debounceTimeout={500}
                                           value={props.affineCoeffs.b2.toString()}
                                           onChange={props.onAffineCoeffChange} />
                        </label>
                    </div>
                    <div className="controls-group">
                        <button type="button" className="btn btn-danger controls-group__control" title="Reset"
                                onClick={props.onAffineCoeffsReset}>
                            Reset
                        </button>
                    </div>
                </div>
            )}
        </div>
        <div className="form-check">
            <label className="form-check-label">
                <input className="form-check-input" name="projection" type="radio"
                       value={PROJECTIVE_PROJECTION_NAME}
                       onChange={props.onProjectionSelect}
                       checked={props.projectionType === PROJECTIVE_PROJECTION_NAME} />
                Projective
            </label>

            {props.projectionType === PROJECTIVE_PROJECTION_NAME && (
                <div>
                    <div className="controls-group">
                        <label className="controls-group__control">
                            W0
                            <DebounceInput type="number" className="form-control" name="w0"
                                           debounceTimeout={500}
                                           value={props.projectiveCoeffs.w0.toString()}
                                           onChange={props.onProjectiveCoeffChange} />
                        </label>
                    </div>
                    <div className="controls-group">
                        <label className="controls-group__control">
                            Wx
                            <DebounceInput type="number" className="form-control" name="wx"
                                           debounceTimeout={500}
                                           value={props.projectiveCoeffs.wx.toString()}
                                           onChange={props.onProjectiveCoeffChange} />
                        </label>
                        <label className="controls-group__control">
                            Wy
                            <DebounceInput type="number" className="form-control" name="wy"
                                           debounceTimeout={500}
                                           value={props.projectiveCoeffs.wy.toString()}
                                           onChange={props.onProjectiveCoeffChange} />
                        </label>
                    </div>
                    <div className="controls-group">
                        <label className="controls-group__control">
                            X0
                            <DebounceInput type="number" className="form-control" name="x0"
                                           debounceTimeout={500}
                                           value={props.projectiveCoeffs.x0.toString()}
                                           onChange={props.onProjectiveCoeffChange} />
                        </label>
                        <label className="controls-group__control">
                            Y0
                            <DebounceInput type="number" className="form-control" name="y0"
                                           debounceTimeout={500}
                                           value={props.projectiveCoeffs.y0.toString()}
                                           onChange={props.onProjectiveCoeffChange} />
                        </label>
                    </div>
                    <div className="controls-group">
                        <label className="controls-group__control">
                            Xx
                            <DebounceInput type="number" className="form-control" name="xx"
                                           debounceTimeout={500}
                                           value={props.projectiveCoeffs.xx.toString()}
                                           onChange={props.onProjectiveCoeffChange} />
                        </label>
                        <label className="controls-group__control">
                            Yx
                            <DebounceInput type="number" className="form-control" name="yx"
                                           debounceTimeout={500}
                                           value={props.projectiveCoeffs.yx.toString()}
                                           onChange={props.onProjectiveCoeffChange} />
                        </label>
                    </div>
                    <div className="controls-group">
                        <label className="controls-group__control">
                            Xy
                            <DebounceInput type="number" className="form-control" name="xy"
                                           debounceTimeout={500}
                                           value={props.projectiveCoeffs.xy.toString()}
                                           onChange={props.onProjectiveCoeffChange} />
                        </label>
                        <label className="controls-group__control">
                            Yy
                            <DebounceInput type="number" className="form-control" name="yy"
                                           debounceTimeout={500}
                                           value={props.projectiveCoeffs.yy.toString()}
                                           onChange={props.onProjectiveCoeffChange} />
                        </label>
                    </div>
                    <div className="controls-group">
                        <button type="button" className="btn btn-danger controls-group__control" title="Reset"
                                onClick={props.onProjectiveCoeffsReset}>
                            Reset
                        </button>
                    </div>
                </div>
            )}
        </div>
    </div>
);

ProjectionControls.propTypes = {
    onProjectionSelect: PropTypes.func.isRequired,
    projectionType: PropTypes.string.isRequired,
    onProjectiveCoeffChange: PropTypes.func.isRequired,
    onProjectiveCoeffsReset: PropTypes.func.isRequired,
    onAffineCoeffChange: PropTypes.func.isRequired,
    onAffineCoeffsReset: PropTypes.func.isRequired,
    affineCoeffs: PropTypes.shape({
        a0: PropTypes.number.isRequired,
        b0: PropTypes.number.isRequired,
        a1: PropTypes.number.isRequired,
        b1: PropTypes.number.isRequired,
        a2: PropTypes.number.isRequired,
        b2: PropTypes.number.isRequired
    }).isRequired,
    projectiveCoeffs: PropTypes.shape({
        w0: PropTypes.number.isRequired,
        wx: PropTypes.number.isRequired,
        wy: PropTypes.number.isRequired,
        x0: PropTypes.number.isRequired,
        y0: PropTypes.number.isRequired,
        xx: PropTypes.number.isRequired,
        xy: PropTypes.number.isRequired,
        yx: PropTypes.number.isRequired,
        yy: PropTypes.number.isRequired
    }).isRequired
};

export default ProjectionControls;