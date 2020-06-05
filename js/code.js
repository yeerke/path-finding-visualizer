var startPoint = new Point(3, 3), endPoint = new Point(10, 10);
var isAbleToClick = true;
var canvas, ctx;
var canDrawWal = false;
var isWall;
var movingPoint = 0; 

const length = 56, height = 28, gridLenth = 25;
const time = 10;
const green = "#00FF00";
const cyan = "#5DBCD2";
const white = "#FFFFFF";
const black = "#000000";
const yellow = "#FFFF00";
const blue = "#163B66";

document.addEventListener('DOMContentLoaded', function() {
    canvas = document.getElementById("cnvs");
    ctx = canvas.getContext("2d");
    clear();
    document.getElementById('got').addEventListener('click', function() {
        var div = document.getElementById('tutorial'); 
        div.parentNode.removeChild(div); 
    });
    document.getElementById("btn").addEventListener("click", clear);
    document.getElementById("path").addEventListener("click", visualizePath);
    document.getElementById("cnvs").addEventListener('mouseup', function() {
        canDrawWal = movingPoint = 0;
    });
    document.getElementById("cnvs").addEventListener('mousedown', setClick);

    document.addEventListener("mousemove", move);
});

function move(event) {
    let pos = getMousePos(event);
    if (pos.x >= canvas.left || pos.y >= canvas.height || pos.x < 0 || pos.y < 0) {
        movingPoint = 0;
        canDrawWal = false;
    }
    if (movingPoint == 0) {
        tryDrawWal(event);
    } else {
        movePoint(event);
    }
}

function setClick(event) {
    if (!isAbleToClick) return;
    let pos = getMousePos(event);
    if (startPoint.isEqual(new Point(Math.floor(pos.x / gridLenth), Math.floor(pos.y / gridLenth)))) {
        movingPoint = 1;
    } else if (endPoint.isEqual(new Point(Math.floor(pos.x / gridLenth), Math.floor(pos.y / gridLenth)))) {
        movingPoint = 2;
    } else {
        canDrawWal = true;
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

function getMousePos(event) {
    let rect = canvas.getBoundingClientRect();
    return new Point(event.clientX - rect.left, event.clientY - rect.top);
}