import { CurvesStore } from './curves-store';
import { FractalsStore } from './fractals-store';
import { ModeStore } from './mode-store';
import { PositionStore } from './position-store';
import { ProjectionStore } from './projection-store';
import { SurfaceProjectionStore } from './surface-projection-store';

export class RootStore {
    constructor() {
      this.curvesStore = new CurvesStore(this);
      this.fractalsStore = new FractalsStore(this);
      this.modeStore = new ModeStore(this);
      this.positionStore = new PositionStore(this);
      this.projectionStore = new ProjectionStore(this);
      this.surfaceProjectionStore = new SurfaceProjectionStore(this);
    }
}

const rootStore = new RootStore();

export default rootStore;