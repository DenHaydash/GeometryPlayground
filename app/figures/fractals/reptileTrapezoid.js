import BaseFractal from '../base/base-fractal';
import { REPTILE_TRAPEZOID_NAME } from '../factory/names';

export default class ReptileTrapezoid extends BaseFractal {
    static FigureName = REPTILE_TRAPEZOID_NAME;

    constructor() {
        super();

        this.replacementRules = {
            'R': '-LFF+LFF+LFF++FLFFF|',
            'L': '+RFF-RFF-RFF--FRFFF|',
            'F': 'GG',
            'G': 'GG'
        };

        this.axiom = this.replacementRules['L'];

        this.moveStep = 20;
        this.angleStep = 60;
    }
}