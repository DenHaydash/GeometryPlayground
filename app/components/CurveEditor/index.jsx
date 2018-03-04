import React from 'react';
import DebounceInput from 'react-debounce-input';
import PropTypes from 'prop-types';

import "./curve-editor.scss";

const CurveEditor = (props) => (
    <div className="form-check line-editor">
        <div className="controls-group">
            <label className="controls-group__control">
                A.x
                <DebounceInput type="number" className="form-control" name="A.x"
                               debounceTimeout={500}
                               value={props.line.A.x.toString()}
                               onChange={props.onLinePointUpdate}/>
            </label>
            <label className="controls-group__control">
                A.y
                <DebounceInput type="number" className="form-control" name="A.y"
                               debounceTimeout={500}
                               value={props.line.A.y.toString()}
                               onChange={props.onLinePointUpdate}/>
            </label>
        </div>
        <div className="controls-group">
            <label className="controls-group__control">
                B.x
                <DebounceInput type="number" className="form-control" name="B.x"
                               debounceTimeout={500}
                               value={props.line.B.x.toString()}
                               onChange={props.onLinePointUpdate}/>
            </label>
            <label className="controls-group__control">
                B.y
                <DebounceInput type="number" className="form-control" name="B.y"
                               debounceTimeout={500}
                               value={props.line.B.y.toString()}
                               onChange={props.onLinePointUpdate}/>
            </label>
        </div>
        <div className="controls-group">
            <label className="controls-group__control">
                C.x
                <DebounceInput type="number" className="form-control" name="C.x"
                               debounceTimeout={500}
                               value={props.line.C.x.toString()}
                               onChange={props.onLinePointUpdate}/>
            </label>
            <label className="controls-group__control">
                C.y
                <DebounceInput type="number" className="form-control" name="C.y"
                               debounceTimeout={500}
                               value={props.line.C.y.toString()}
                               onChange={props.onLinePointUpdate}/>
            </label>
        </div>
        <div className="controls-group">
            <label className="controls-group__control">
                f
                <DebounceInput type="number" className="form-control" name="f"
                               debounceTimeout={500}
                               value={props.line.f.toString()}
                               onChange={props.onLinePointUpdate}/>
            </label>
        </div>
        <div className="controls-group">
            <button type="button" className="btn btn-danger controls-group__control" title="Reset"
                onClick={props.onLinePointsReset}>
                Reset
            </button>
        </div>
    </div>
);

CurveEditor.propTypes = {
    line: PropTypes.shape({
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
    }).isRequired,

    onLinePointUpdate: PropTypes.func.isRequired,
    onLinePointsReset: PropTypes.func.isRequired,
};

export default CurveEditor;