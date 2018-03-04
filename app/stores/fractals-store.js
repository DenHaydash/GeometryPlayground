import { observable, action } from 'mobx';

export class FractalsStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable generation = 0;

    @action.bound setGeneration(generation) {
        this.generation = generation;
    }
}

const fractalsStore = new FractalsStore();

export default fractalsStore;