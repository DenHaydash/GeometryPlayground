import Konva from 'konva';
import BaseFigure from './base-figure';

import { toCanvasCoords } from "../../helpers/coords-converter";

export default class BaseSurface extends BaseFigure {
    figures = [];

    constructor() {
        super();
    }

    addFigure(figure) {
        this.figures.push(figure);
    }

    render(layer) {
        const maxV = 14;

        for (let u = 0; u < 2*Math.PI; u += Math.PI/100) {
            for (let v = 0; v <= maxV; v += 0.5) {
                const point = toCanvasCoords(this.projector(this.activeTransforms({
                    x: this.getX(v, u),
                    y: this.getY(v, u),
                    z: this.getZ(v)
                })));

                layer.add(new Konva.Circle({
                    x: point.x,
                    y: point.y,
                    radius: 0.5,
                    fill: 'blue'
                }));
            }
        }

        for (let u = 0; u < 2*Math.PI; u += Math.PI/20) {
            for (let v = 0; v <= maxV; v += 0.1) {
                const point = toCanvasCoords(this.projector(this.activeTransforms({
                    x: this.getX(v, u),
                    y: this.getY(v, u),
                    z: this.getZ(v)
                })));

                layer.add(new Konva.Circle({
                    x: point.x,
                    y: point.y,
                    radius: 0.5,
                    fill: 'blue'
                }));
            }
        }

        const defaultGridStep = 20;
        const uStep = Math.PI/20,
              vStep = 0.5;

        for (const figure of this.figures) {
            figure.withProjection(({x, y}) => {
                const u = x/defaultGridStep * uStep;
                const v = y/defaultGridStep * vStep;
    
                return this.projector(this.activeTransforms({
                    x: this.getX(v, u),
                    y: this.getY(v, u),
                    z: this.getZ(v)
                }));
            });

            figure.render(layer);
        }
    }
}