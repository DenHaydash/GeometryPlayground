import { observable, action } from 'mobx';

const defaultShift = { x: 200, y: 200, z: 0 };
const defaultAngle = 0;

export class SurfaceProjectionStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable.ref shift = {...defaultShift};
    @observable angle = defaultAngle;

    @action.bound move({x, y, z}) {
        this.shift = {
            x: this.shift.x += x,
            y: this.shift.y += y,
            z: this.shift.z += z
        };
    }

    @action.bound rotate(angle) {
        this.angle += angle;
    }

    @action.bound reset() {
        this.shift = {...defaultShift};
        this.angle = defaultAngle;
    }
}

const positionStore = new SurfaceProjectionStore();

export default positionStore;