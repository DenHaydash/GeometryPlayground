import Konva from 'konva';

import BaseFigure from './base-figure';
import { toCanvasCoords } from '../../helpers/coords-converter';
import { convertDegreesToRadians } from '../../helpers/degrees-convertor';

export default class BaseFractal extends BaseFigure {
    constructor() {
        super();

        this.generation = 0;
    }

    withProjection() {
        return this;
    }

    setGeneration(generation) {
        this.generation = generation;
    }

    get commands() {
        return this.getFractal(this.generation).split('');
    }

    getFractal(generation) {
        let fractal = this.axiom;

        for (let i = 0; i < generation; i++) {
            let updatedCommands = [];

            for (const command of fractal.split('')) {
                const replacement = this.replacementRules[command] || command;

                updatedCommands.push(replacement)
            }

            fractal = updatedCommands.join('');
        }

        return fractal;
    }

    render(layer) {
        let currentAngle = 0;
        let currentCoords = { x: 0, y: 0 };

        for (let command of this.commands) {
            const startPoint = {...currentCoords};

            switch (command) {
                case '+':
                    currentAngle += this.angleStep;
                    break;
                case '-':
                    currentAngle -= this.angleStep;
                    break;
                case '|':
                    currentAngle += 180;
                    break;
                case 'F':
                case 'G': {
                    const radian = convertDegreesToRadians(currentAngle);
                    currentCoords = {
                        x: currentCoords.x + this.moveStep*Math.cos(radian),
                        y: currentCoords.y + this.moveStep*Math.sin(radian)
                    };
                    break;
                }
            }

            const linePoints = [startPoint, currentCoords]
                .map(this.activeTransforms)
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