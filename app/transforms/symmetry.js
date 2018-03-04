import affine from './projections/affine';
import withOrder from './helpers/with-order';

export default vertical => withOrder(
    point => affine(
        { a0: 0, b0: 0 },
        { a1: vertical ? -1 : 1, b1: 0 },
        { a2: 0, b2: vertical ? 1 : -1 }
    )(point), 1);