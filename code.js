var click = -1;
var x1, y1, x2, y2;
var isAbleToClick = true;
var canvas, ctx
var canDraw = false;

var isWall = new Array(14);
for (let i = 0; i < isWall.length; i++) {
    isWall[i] = new Array(14);
    for (let j = 0; j < isWall[i].length; ++j) {
        isWall[i][j] = false;
    }
}

document.addEventListener('DOMContentLoaded', function() {
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
    document.getElementById("cnvs").addEventListener('mousedown', f);

    document.addEventListener("mousemove", draw);
});

function f(event) {
    if (!isAbleToClick) return;
    if (click == 1) {
        x2 = Math.floor(event.pageX / 50);
        y2 = Math.floor(event.pageY / 50);
        visualize();
        click = -1;
    } else if (click == 0){
        x1 = Math.floor(event.pageX / 50);
        y1 = Math.floor(event.pageY / 50);
    } else if (click == 3){
        canDraw = true;
    }
}

function draw(event) {
    if (!canDraw) return; 
    x = Math.floor(event.pageX / 50);
    y = Math.floor(event.pageY / 50);
    ctx.fillStyle = "#0000FF";
    isWall[x][y] = true;
    ctx.fillRect(x * 50, y * 50, 50, 50);
}

function clear() {
    click = -1;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < canvas.width; i += 50) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i += 50) {
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.height, i);
        ctx.stroke();
    }
}

function visualize() {
    isAbleToClick = false;
    var list = shortestPath(x1, y1, x2, y2, isWall);
    function writeNext() {
        if (list.isEmpty()) {
            isAbleToClick = true;
            return;
        }
        let f = list.front();
        list.pop();
        ctx.fillStyle = "#000000";
        ctx.fillRect(f[0] * 50, f[1] * 50, 50, 50);
        setTimeout(function() {
            writeNext();
        }, 20);
    }
    writeNext();
}