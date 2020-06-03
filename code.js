var click = false;
var x1, y1, x2, y2;
var isAbleToClick = true;
document.addEventListener('DOMContentLoaded', function() {
    clear();
    document.getElementById("cnvs").addEventListener('mousedown', f);
});
function f(event) {
    if (!isAbleToClick) return;
    if (click) {
        x2 = Math.floor(event.pageX / 50);
        y2 = Math.floor(event.pageY / 50);
        visualize();
    } else {
        clear();
        x1 = Math.floor(event.pageX / 50);
        y1 = Math.floor(event.pageY / 50);
    }
    click = !click;
}

function clear() {
    var canvas = document.getElementById("cnvs");
    var ctx = canvas.getContext("2d");
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
    var list = shortestPath(x1, y1, x2, y2);
    function writeNext() {
        if (list.isEmpty()) {
            isAbleToClick = true;
            return;
        }
        var canvas = document.getElementById("cnvs");
        var ctx = canvas.getContext("2d");
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