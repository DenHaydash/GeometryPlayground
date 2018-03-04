import BaseFigure from '../../base/base-figure';
import { CUBE_NAME } from '../../factory/names';

export default class Cube extends BaseFigure {
    static FigureName = CUBE_NAME;

    constructor() {
        super();

        this.contours = [
            [
                {x:0, y: 0, z: 0},
                {x:50, y: 0, z: 0},
                {x:50, y: 50, z: 0},
                {x:0, y: 50, z: 0},
                {x:0, y: 0, z: 0}
            ],
            [
                {x:0, y: 0, z: 50},
                {x:50, y: 0, z: 50},
                {x:50, y: 50, z: 50},
                {x:0, y: 50, z: 50},
                {x:0, y: 0, z: 50}
            ],
            [
                {x:0, y: 0, z: 0},
                {x:0, y: 0, z: 50},
            ],
            [
                {x:50, y: 0, z: 0},
                {x:50, y: 0, z: 50},
            ],
            [
                {x:0, y: 50, z: 0},
                {x:0, y: 50, z: 50},
            ],
            [
                {x:50, y: 50, z: 0},
                {x:50, y: 50, z: 50},
            ]
        ];
    }
}