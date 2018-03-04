import BaseSurface from '../../base/base-surface';
import { ELLIPTIC_PARABOLOID_NAME } from '../../factory/names';

export default class EllipticParaboloid extends BaseSurface {
    static FigureName = ELLIPTIC_PARABOLOID_NAME;

    constructor() {
        super();

        this.A = 20; 
        this.B = 20;
        this.C = 1; 
        this.z0 = 0;

        this.getX = (v, u) => this.A*v*Math.cos(u);
        this.getY = (v, u) => this.B*v*Math.sin(u);
        this.getZ = (v) => this.z0 + this.C*Math.pow(v, 2);
    }
}