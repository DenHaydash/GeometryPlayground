// arcs of an ellipse
export default (A, B, C, W) => u => ({
    x: (A.x * W.a * Math.pow(1 - u, 2) + 2 * B.x * W.b * u * (1 - u) + C.x * W.c * Math.pow(u, 2)) /
        (W.a * Math.pow(1 - u, 2) + 2 * W.b * u * (1 - u) + W.c * Math.pow(u, 2)),
    y: (A.y * W.a * Math.pow(1 - u, 2) + 2 * B.y * W.b * u * (1 - u) + C.y * W.c * Math.pow(u, 2)) /
        (W.a * Math.pow(1 - u, 2) + 2 * W.b * u * (1 - u) + W.c * Math.pow(u, 2)),
});