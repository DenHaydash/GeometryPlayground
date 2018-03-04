import affine from './projections/affine';
import withOrder from './helpers/with-order';

export default scale => withOrder(
    point => affine(
        { a0: 0, b0: 0 },
        { a1: scale.x, b1: 0 },
        { a2: 0, b2: scale.y }
    )(point), 4);