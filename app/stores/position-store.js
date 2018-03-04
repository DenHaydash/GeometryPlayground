import { observable, action} from 'mobx';

const defaultShift = { x: 0, y: 0, z: 0 };
const defaultAngle = 0;
const defaultScale = { x: 1, y: 1, z: 1 };

export class PositionStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable.ref shift = {...defaultShift};
    @observable angle = defaultAngle;
    @observable.ref scale = {...defaultScale};
    @observable horizontalSymmetry = false;
    @observable verticalSymmetry = false;

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

    @action.bound zoom(axis, scale) {
        function getEffectiveScaleStep(scale, scaleStep) {
            return scale + scaleStep <= 0 ? 0 : scaleStep;
        }

        this.scale = {
            x: this.scale.x += getEffectiveScaleStep(this.scale.x, !axis || axis === 'x' ? scale : 0),
            y: this.scale.y += getEffectiveScaleStep(this.scale.y, !axis || axis === 'y' ? scale : 0)
        };
    }

    @action.bound flipHorizontal() {
        this.verticalSymmetry = !this.verticalSymmetry;
    }

    @action.bound flipVertical() {
        this.horizontalSymmetry = !this.horizontalSymmetry;
    }

    @action.bound reset() {
        this.shift = {...defaultShift};
        this.angle = defaultAngle;
        this.scale = {...defaultScale};
        this.horizontalSymmetry = false;
        this.verticalSymmetry = false;
    }
}

const positionStore = new PositionStore();

export default positionStore;