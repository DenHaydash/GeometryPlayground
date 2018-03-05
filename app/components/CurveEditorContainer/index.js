import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import pure from 'recompose/pure';
import set from 'lodash/set';

import CurveEditor from '../CurveEditor';

export default compose(
    withHandlers({
        onLinePointUpdate: props => e => {
            const updatedLine = {...props.line};
            set(updatedLine, e.target.name, +e.target.value);

            props.onLineUpdate(props.lineNumber, updatedLine);
        },

        onLinePointsReset: props => () => {
            props.onLineReset(props.lineNumber);
        }
    }),
    pure
)(CurveEditor)