var click = -1;
var startPoint, endPoint;
var isAbleToClick = true;
var canvas, ctx
var canDraw = false;
var isWall;

document.addEventListener('DOMContentLoaded', function() {
    isWall = initializeArray(false, 14, 14);
    canvas = document.getElementById("cnvs");
    ctx = canvas.getContext("2d");
    clear();
    document.getElementById("btn").addEventListener("click", clear);
    document.getElementById("start").addEventListener("click", function() {
        click = 0;
    });
    document.getElementById("end").addEventListener("click", function() {
        click = 1;
    });
    document.getElementById("wall").addEventListener("click", function() {
        click = 3;
    });
    document.getElementById("cnvs").addEventListener('mouseup', function() {
        canDraw = false;
    });
    document.getElementById("cnvs").addEventListener('mousedown', setClick);

    document.addEventListener("mousemove", tryDrawWal);
});

function setClick(event) {
    if (!isAbleToClick) return;
    if (click == 1) {
        endPoint = new Point(Math.floor(event.pageX / 50), Math.floor(event.pageY / 50));
        visualizePath();
        click = -1;
    } else if (click == 0){
        startPoint = new Point(Math.floor(event.pageX / 50), Math.floor(event.pageY / 50));
    } else if (click == 3){
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
