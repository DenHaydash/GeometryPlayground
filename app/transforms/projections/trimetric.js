import { convertDegreesToRadians } from '../../helpers/degrees-convertor';

export default (alpha, beta) => point => {
    const alphaRadian = convertDegreesToRadians(alpha), 
          betaRadian = convertDegreesToRadians(beta);

    return {
        x: point.x*Math.sin(alphaRadian)*Math.sin(betaRadian) 
            + point.y*Math.cos(alphaRadian) 
            - point.z*Math.sin(alphaRadian)*Math.cos(betaRadian),
 
        y: -point.x*Math.cos(alphaRadian)*Math.sin(betaRadian)
            + point.y*Math.sin(alphaRadian)
            + point.z*Math.cos(alphaRadian)*Math.cos(betaRadian)
    };
}