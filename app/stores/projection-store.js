import { observable, action, computed } from 'mobx';

import projectionsFactory from '../transforms/projections/factory';
import { 
    PROJECTIVE_PROJECTION_NAME,
    AFFINE_PROJECTION_NAME,
    DEFAULT_PROJECTION_NAME,
    TRIMETRIC_PROJECTION_NAME
} from '../transforms/projections/factory/names';
import { 
    GEOMETRY_MODE, 
    GEOMETRY_3D_MODE,
    SURFACE_MODE 
} from '../common/modes';

const defaultAffineCoeffs = {
    a0: 0,
    b0: 0,
    a1: 1,
    b1: 0.2,
    a2: 0.2,
    b2: 1
};
const defaultProjectiveCoeffs = {
    w0: 1, // global shrink
    wx: 0.00075, // shrink x
    wy: 0.00005, // shrink y
    x0: -50, // shift x
    y0: 0, // shift y
    xx: 1300, // scale x
    yx: 600, // angle y
    xy: -5050, // angle x
    yy: 20000 // scale y
};

const defaultAngleAlpha = 0;
const defaultAngleBeta = 0;

export class ProjectionStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable projectionType = DEFAULT_PROJECTION_NAME;
    @observable.ref affineCoeffs = {...defaultAffineCoeffs};
    @observable.ref projectiveCoeffs = {...defaultProjectiveCoeffs};

    @observable angleAlpha = defaultAngleAlpha;
    @observable angleBeta = defaultAngleBeta;

    @computed get projector() {
        // 2D projectors
        if (this.rootStore.modeStore.mode === GEOMETRY_MODE) {
            const projector = projectionsFactory(this.projectionType);

            let coeffs = [];
    
            if (this.projectionType === AFFINE_PROJECTION_NAME) {
                coeffs = [
                    {a0: this.affineCoeffs.a0, b0: this.affineCoeffs.b0},
                    {a1: this.affineCoeffs.a1, b1: this.affineCoeffs.b1},
                    {a2: this.affineCoeffs.a2, b2: this.affineCoeffs.b2}
                ];
            }
    
            if (this.projectionType === PROJECTIVE_PROJECTION_NAME) {
                coeffs = [
                    this.projectiveCoeffs.w0,
                    {wx: this.projectiveCoeffs.wx, wy: this.projectiveCoeffs.wy},
                    {x0: this.projectiveCoeffs.x0, y0: this.projectiveCoeffs.y0},
                    {xx: this.projectiveCoeffs.xx, yx: this.projectiveCoeffs.yx},
                    {xy: this.projectiveCoeffs.xy, yy: this.projectiveCoeffs.yy}
                ];
            }
    
            return point => projector(...coeffs)(point);
        }

        // 3D projector
        if (this.rootStore.modeStore.mode === GEOMETRY_3D_MODE 
            || this.rootStore.modeStore.mode === SURFACE_MODE) {
            const alpha = this.angleAlpha,
                  beta = this.angleBeta;

            return point => projectionsFactory(TRIMETRIC_PROJECTION_NAME)(alpha, beta)(point);
        }

        return point => projectionsFactory(DEFAULT_PROJECTION_NAME)()(point);
    }

    @action.bound setProjectionType(projection) {
        this.projectionType = projection;
    }

    @action.bound setAffineCoeffs(name, value) {
        this.affineCoeffs = { ...this.affineCoeffs, ...{ [name]: value} };
    }

    @action.bound rotateAngleAlpha(angle) {
        this.angleAlpha += angle;
    }

    @action.bound rotateAngleBeta(angle) {
        this.angleBeta += angle;
    }

    @action.bound resetAngles() {
        this.angleAlpha = defaultAngleAlpha;
        this.angleBeta = defaultAngleBeta;
    }

    @action.bound resetAffineCoeffs() {
        this.affineCoeffs = {...defaultAffineCoeffs};
    }

    @action.bound setProjectiveCoeffs(name, value) {
        this.projectiveCoeffs = { ...this.projectiveCoeffs, ...{ [name]: value} };
    }

    @action.bound resetProjectiveCoeffs() {
        this.projectiveCoeffs = {...defaultProjectiveCoeffs};
    }
}

const projectionStore = new ProjectionStore();

export default projectionStore;