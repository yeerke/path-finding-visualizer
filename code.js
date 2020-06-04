var startPoint = new Point(3, 3), endPoint = new Point(10, 10);
var isAbleToClick = true;
var canvas, ctx;
var canDraw = false;
var isWall;
var movingPoint = 0; 

const length = 14, height = 14, gridLenth = 50;
const green = "#00FF00";
const grey = "#808080";
const white = "#FFFFFF";
const black = "#000000";
const yellow = "#FFFF00";
const blue = "#0000FF";
const red = "#FF0000";

document.addEventListener('DOMContentLoaded', function() {
    isWall = initializeArray(false, length, height);
    canvas = document.getElementById("cnvs");
    ctx = canvas.getContext("2d");
    clear();
    document.getElementById("btn").addEventListener("click", clear);
    document.getElementById("path").addEventListener("click", visualizePath);
    document.getElementById("cnvs").addEventListener('mouseup', function() {
        canDraw = movingPoint = 0;
    });
    document.getElementById("cnvs").addEventListener('mousedown', setClick);

    document.addEventListener("mousemove", move);
});

function move(event) {
    if (movingPoint == 0) {
        tryDrawWal(event);
    } else {
        movePoint(event);
    }
}

function setClick(event) {
    if (!isAbleToClick) return;
    if (startPoint.isEqual(new Point(Math.floor(event.pageX / gridLenth), Math.floor(event.pageY / gridLenth)))) {
        movingPoint = 1;
    } else if (endPoint.isEqual(new Point(Math.floor(event.pageX / gridLenth), Math.floor(event.pageY / gridLenth)))) {
        movingPoint = 2;
    } else {
        canDraw = true;
    }
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
