import Triangle from '../geometry/triangle';
import Cock from '../curves/cock';
import ReptileTrapezoid from '../fractals/reptileTrapezoid';
import Cube from '../3d/shapes/cube';
import EllipticParaboloid from '../3d/surfaces/ellipticParaboloid'

const figures = [Triangle, Cock, ReptileTrapezoid, Cube, EllipticParaboloid];

const figuresMap = figures.reduce((acc, cur) => {
    acc[cur.FigureName] = cur;

    return acc;
}, {});

export default (name) => new (figuresMap[name] || Triangle)();