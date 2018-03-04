import Konva from 'konva';
import sortBy from 'lodash/sortBy';

import { toCanvasCoords } from '../../helpers/coords-converter';
import projectorFactory from '../../transforms/projections/factory';
import { DEFAULT_PROJECTION_NAME } from '../../transforms/projections/factory/names';

export default class BaseFigure {
    contours = [];
    transforms = [];

    projector = projectorFactory(DEFAULT_PROJECTION_NAME)();

    withTransform(transform) {
        this.transforms.push(transform);

        return this;
    }

    withProjection(projector) {
        this.projector = projector;

        return this;
    }

    get activeTransforms() {
        return sortBy(this.transforms, t => t.order)
            .reduceRight((acc, cur) => point => acc(cur(point)), point => point);
    }

    render(layer) {
        for (let contour of this.contours) {
            const linePoints = contour
                .map(this.activeTransforms)
                .map(this.projector)
                .map(toCanvasCoords)
                .reduce((acc, cur) => [...acc, cur.x, cur.y], []);

            layer.add(new Konva.Line({
                points: linePoints,
                stroke: 'green',
                strokeWidth: 2
            }));
        }
    }
}