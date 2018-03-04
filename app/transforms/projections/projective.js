export default (w0, {wx, wy}, {x0, y0}, {xx, yx}, {xy, yy}) => point => ({
    x: (x0*w0 + xx*wx*point.x + xy*wy*point.y) / (w0 + wx*point.x + wy*point.y),
    y: (y0*w0 + yx*wx*point.x + yy*wy*point.y) / (w0 + wx*point.x + wy*point.y)
})