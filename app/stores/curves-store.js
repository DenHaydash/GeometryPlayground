import { observable, action} from 'mobx';

export class CurvesStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable.ref lineAdjustments = [];
    @observable debugMode = false;

    @action.bound addLineAdjustment(index, line) {
        const lineAdjustments = [...this.lineAdjustments];
        lineAdjustments[index] = line;

        this.lineAdjustments = lineAdjustments;
    }

    @action.bound resetLineAdjustment(index) {
        const lineAdjustments = [...this.lineAdjustments];
        lineAdjustments[index] = null;

        this.lineAdjustments = lineAdjustments;
    }

    @action.bound toggleDebugMode() {
        this.debugMode = !this.debugMode;
    }
}

const curvesStore = new CurvesStore();

export default curvesStore;