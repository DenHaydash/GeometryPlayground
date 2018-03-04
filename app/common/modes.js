export const GEOMETRY_MODE = 'geometry';
export const CURVES_MODE = 'curves';
export const FRACTALS_MODE = 'fractals';
export const GEOMETRY_3D_MODE = '3d';
export const SURFACE_MODE = 'surface';

import {
    TRIANGLE_NAME,
    COCK_CURVE_NAME,
    REPTILE_TRAPEZOID_NAME,
    CUBE_NAME,
    ELLIPTIC_PARABOLOID_NAME
} from "../figures/factory/names";

export function modeToFigureName(mode) {
    switch (mode) {
        case GEOMETRY_MODE:
            return TRIANGLE_NAME;
        case CURVES_MODE:
            return COCK_CURVE_NAME;
        case FRACTALS_MODE:
            return REPTILE_TRAPEZOID_NAME;
        case GEOMETRY_3D_MODE:
            return CUBE_NAME;
        case SURFACE_MODE:
            return ELLIPTIC_PARABOLOID_NAME;
        default:
            return GEOMETRY_MODE;

    }
}