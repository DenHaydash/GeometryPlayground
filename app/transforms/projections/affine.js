export default ({a0, b0}, {a1, b1}, {a2, b2}) => point => ({
    x: a0 + a1*point.x + a2*point.y,
    y: b0 + b1*point.x + b2*point.y
})
