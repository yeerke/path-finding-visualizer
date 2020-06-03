function tryDrawWal(event) {
	if (!canDraw) return; 
	let x = Math.floor(event.pageX / 50);
	let y = Math.floor(event.pageY / 50);
	ctx.fillStyle = "#0000FF";
	isWall[x][y] = true;
	ctx.fillRect(x * 50, y * 50, 50, 50);
}
