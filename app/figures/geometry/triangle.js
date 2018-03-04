import BaseFigure from '../base/base-figure';
import { TRIANGLE_NAME } from '../factory/names';

export default class Triangle extends BaseFigure {
    static FigureName = TRIANGLE_NAME;

    constructor() {
        super();

        const width = 60;
        const height = 70;

        const innerFigureShiftWidth = width / 2 - 20;
        const innerFigureShiftHeight = 20;

        const innerFigureWidth = 32;
        const innerFigureHeight = 60;

        this.contours = [
            [
                {x: 0, y: 0},
                {x: width, y: 0},
                {x: width / 2, y: height},
                {x: 0, y: 0}
            ],
            [
                {x: innerFigureShiftWidth, y: 0},
                {x: innerFigureShiftWidth, y: innerFigureShiftHeight},
                {
                    x: innerFigureWidth + innerFigureShiftWidth,
                    y: innerFigureShiftHeight
                },
                {
                    x: innerFigureWidth / 2 + innerFigureShiftWidth,
                    y: innerFigureHeight
                }
            ]
        ];
    }
}