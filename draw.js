function visualizePath() {
  	isAbleToClick = false;
	let ans = shortestPath();
	let parent = ans[1];
	let points = ans[0];
	let temp = endPoint;
	let path = new Array();	
	while (!temp.isEqual(startPoint)) {
		path.push(temp);
		temp = parent[temp.x][temp.y];
	}
	path.push(startPoint);
	path.reverse();
	writeNext(points, "#000000");
	setTimeout(function() {
		writeNext(path, "#FF0000")
	}, points.length * 20 + 1000);
}

function writeNext(path, color) {
	if (path.length === 0) {
		isAbleToClick = true;
		return;
	}
	let position = path[0];
	path.shift();
	ctx.fillStyle = color;
	ctx.fillRect(position.x * 50, position.y * 50, 50, 50);
	setTimeout(function() {
		writeNext(path);
	}, 20);
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