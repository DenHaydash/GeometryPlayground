import affine from '../affine';
import projective from '../projective';
import defaultProjector from '../default';
import trimetricProjector from '../trimetric';
import { 
    AFFINE_PROJECTION_NAME,
    PROJECTIVE_PROJECTION_NAME, 
    DEFAULT_PROJECTION_NAME, 
    TRIMETRIC_PROJECTION_NAME 
} from './names';

const projectorsMap = {
    [AFFINE_PROJECTION_NAME]: affine,
    [PROJECTIVE_PROJECTION_NAME]: projective,
    [DEFAULT_PROJECTION_NAME]: defaultProjector,
    [TRIMETRIC_PROJECTION_NAME]: trimetricProjector
};

export default (name) => projectorsMap[name] || defaultProjector;