import React from 'react';
import PropTypes from 'prop-types';

import CurveEditorContainer from '../CurveEditorContainer';

import "./curves-editor.scss";

const CurvesEditor = (props) => (
    <div className="curves-editor">
        <div className="form-check curves-editor__debug-mode-switcher">
            <label className="form-check-label">
                Debug mode
                <input type="checkbox" className="form-check-input" checked={props.debug} onChange={props.onToggleDebugMode} />
            </label>
        </div>
        <div>
            <select className="custom-select" onChange={props.onLineSelect} value={props.selectedLineIndex}>
                {props.lines.map((l, i) =>
                    <option key={i} value={i}>Line {i + 1}</option>
                )}
            </select>
        </div>
        <div>
            <CurveEditorContainer
                line={props.selectedLine}
                lineNumber={props.selectedLineIndex}
                onLineUpdate={props.onLineUpdate}
                onLineReset={props.onLineReset} />
        </div>
    </div>
);

CurvesEditor.propTypes = {
    lines: PropTypes.arrayOf(PropTypes.shape({
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
    })).isRequired,
    selectedLine: PropTypes.shape({
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
    debug: PropTypes.bool.isRequired,
    selectedLineIndex: PropTypes.number.isRequired,

    onLineUpdate: PropTypes.func.isRequired,
    onLineReset: PropTypes.func.isRequired,
    onLineSelect: PropTypes.func.isRequired,
    onToggleDebugMode: PropTypes.func.isRequired
};

export default CurvesEditor;