export function move(x, y) {
    return {
        type: 'MOVE',
        payload: {
            x: x,
            y: y,
        },
    };
}