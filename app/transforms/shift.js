import withOrder from './helpers/with-order';

export default shift => withOrder(
    point => ({
        x: point.x + shift.x,
        y: point.y + shift.y,
        z: point.z + shift.z
    }), 3);