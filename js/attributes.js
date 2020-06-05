function getMousePos(event) {
    let rect = canvas.getBoundingClientRect();
    return new Point(event.clientX - rect.left, event.clientY - rect.top);
}

function initializeArray(value, height, width) {
    var array = new Array(height);
    for (let i = 0; i < height; i++) {
        array[i] = new Array(width);
        for (let j = 0; j < width; ++j) {
            array[i][j] = value;
        }
    }    
    return array;
}

function isValidPoint(point) {
    return isValidAxis(point.x, length) && isValidAxis(point.y, height);
}

function isValidAxis(axis, limit) {
    return 0 <= axis && axis < limit;
}