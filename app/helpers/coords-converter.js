import {
    width as canvasWidth,
    height as canvasHeight
} from '../common/canvas-settings';

export function toCanvasCoords({x, y}) {
    return {
        x: x + canvasWidth / 2,
        y: canvasHeight / 2 - y
    };
}

export function toRealCoords({x, y}) {
    return {
        x: x - canvasWidth / 2,
        y: canvasHeight / 2 - y
    };
}