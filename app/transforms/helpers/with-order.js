export default function withOrder(fn, order) {
    fn.order = order;

    return fn;
}