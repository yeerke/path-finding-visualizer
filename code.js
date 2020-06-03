var click = -1;
var x1, y1, x2, y2;
var isAbleToClick = true;
var canvas, ctx
var canDraw = false;
var isWall = new Array(14);

document.addEventListener('DOMContentLoaded', function() {
    init();
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
        x2 = Math.floor(event.pageX / 50);
        y2 = Math.floor(event.pageY / 50);
        visualizePath();
        click = -1;
    } else if (click == 0){
        x1 = Math.floor(event.pageX / 50);
        y1 = Math.floor(event.pageY / 50);
    } else if (click == 3){
        canDraw = true;
    }
}

function init() {
    for (let i = 0; i < isWall.length; i++) {
        isWall[i] = new Array(14);
        for (let j = 0; j < isWall[i].length; ++j) {
            isWall[i][j] = false;
        }
    }    
}