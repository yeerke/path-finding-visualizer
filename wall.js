function tryDrawWal(event) {
	if (!canDraw) return; 
	x = Math.floor(event.pageX / 50);
	y = Math.floor(event.pageY / 50);
	ctx.fillStyle = "#0000FF";
	isWall[x][y] = true;
	ctx.fillRect(x * 50, y * 50, 50, 50);
}

function init() {
    for (let i = 0; i < isWall.length; i++) {
        isWall[i] = new Array(14);
        for (let j = 0; j < isWall[i].length; ++j) {
            isWall[i][j] = false;
        }
    }    
}