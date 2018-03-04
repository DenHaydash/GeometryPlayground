import withOrder from './helpers/with-order';
import { convertDegreesToRadians } from '../helpers/degrees-convertor';

export default degree => withOrder(point => {
    const radians = convertDegreesToRadians(degree);

    return {
        x: point.x*Math.cos(radians) - point.y*Math.sin(radians),
        y: point.x*Math.sin(radians) + point.y*Math.cos(radians),
        z: point.z
    };
}, 2);