import Konva from 'konva';

import { toCanvasCoords } from "../../helpers/coords-converter";
import curveGenerator from '../../helpers/curves/curve-generator';
import BaseFigure from './base-figure';

export default class BasCurve extends BaseFigure {
    curves = [];
    lineAdjustments = [];

    get adjustedCurves() {
        return this.curves.reduce((acc, cur, i) => {
            acc[i] = this.lineAdjustments[i] || cur;

            return acc;
        }, []);
    }

    withLineAdjustments(lineAdjustments) {
        this.lineAdjustments = lineAdjustments;

        return this;
    }

    render(layer, debug) {
        let lineCounter = 0;

        for (let curve of this.adjustedCurves) {
            const wb = curve.f / (1 - curve.f);

            const pointFunc = curveGenerator(curve.A, curve.B, curve.C, {a: 1, b: wb, c: 1});

            if (debug) {
                layer.add(new Konva.Line({
                    points: [
                        curve.A,
                        curve.B,
                        curve.C,
                        curve.A,
                    ].map(this.activeTransforms)
                        .map(toCanvasCoords)
                        .reduce((acc, cur) => [...acc, cur.x, cur.y], []),
                    stroke: 'red',
                    strokeWidth: 1
                }));

                const pointF = {x: (curve.C.x + curve.A.x) / 2, y: (curve.C.y + curve.A.y) / 2};

                layer.add(new Konva.Line({
                    points: [
                        curve.B,
                        pointF
                    ].map(this.activeTransforms)
                        .map(toCanvasCoords)
                        .reduce((acc, cur) => [...acc, cur.x, cur.y], []),
                    stroke: 'red',
                    strokeWidth: 1
                }));

                const canvasPointF = toCanvasCoords(this.activeTransforms(pointF));

                lineCounter++;

                layer.add(new Konva.Text({
                    x: canvasPointF.x + 5,
                    y: canvasPointF.y,
                    text: lineCounter,
                    fontSize: 12,
                    fill: 'red'
                }));
            }

            for (let u = 0; u <= 1; u += 0.02) {
                const point = toCanvasCoords(this.projector(this.activeTransforms(pointFunc(u))));

                layer.add(new Konva.Circle({
                    x: point.x,
                    y: point.y,
                    radius: 1,
                    fill: 'green'
                }));
            }
        }
    }
}