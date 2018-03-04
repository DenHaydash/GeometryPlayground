import { observable, action } from 'mobx';

import { GEOMETRY_MODE } from '../common/modes';

export class ModeStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable mode = GEOMETRY_MODE;

    @action.bound setMode(modeName) {
        this.mode = modeName;
    }
}

const modeStore = new ModeStore();

export default modeStore;