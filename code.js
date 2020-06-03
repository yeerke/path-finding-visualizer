document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById("cnvs");
    var ctx = canvas.getContext("2d");
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
    visualize();
});

function visualize() {
    var list = shortestPath(5, 4, 5, 0);
    function writeNext() {
        if (list.isEmpty()) return;
        var canvas = document.getElementById("cnvs");
        var ctx = canvas.getContext("2d");
        let f = list.front();
        list.pop();
        ctx.fillStyle = "#000000";
        ctx.fillRect(f[0] * 50, f[1] * 50, 50, 50);
        setTimeout(function() {
            writeNext();
        }, 50);
    }
    writeNext();
}