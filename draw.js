function visualizePath() {
  	isAbleToClick = false;
	let path = shortestPath();
	function writeNext() {
		if (path.isEmpty()) {
			isAbleToClick = true;
			return;
		}
		let position = path.front();
		path.pop();
		ctx.fillStyle = "#000000";
		ctx.fillRect(position.x * 50, position.y * 50, 50, 50);
		setTimeout(function() {
			writeNext();
		}, 20);
	}
	writeNext();
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