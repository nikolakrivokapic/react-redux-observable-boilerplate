export default function toggleProp(key, on, off) {
    return (props) => props[key] ? on : off;
}

export function togglePropFromValue(key, on, off, trueValue) {
    return (props) => props[key] === trueValue ? on : off;
}

export function togglePropFromValues(key, on, off, trueValue, falseValue) {
    return (props) => {
        if (props[key] === trueValue) {
            return on;
        } else if (props[key] === falseValue) {
            return off;
        }
    };
}

export function getFromProps(key) {
    return (props) => props[key];
}
