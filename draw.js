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
	writeNext(points, "#808080");
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
	ctx.fillRect(position.x * gridLenth + 1, position.y * gridLenth + 1, gridLenth - 2, gridLenth - 2);
	setTimeout(function() {
		writeNext(path);
	}, 20);
}

function clear() {
	click = -1;
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i < canvas.width; i += gridLenth) {
		ctx.moveTo(i, 0);
		ctx.lineTo(i, canvas.height);
		ctx.stroke();
	}
	for (let i = 0; i < canvas.height; i += gridLenth) {
		ctx.moveTo(0, i);
		ctx.lineTo(canvas.height, i);
		ctx.stroke();
	}
}

function tryDrawWal(event) {
	if (!canDraw) return; 
	let x = Math.floor(event.pageX / gridLenth);
	let y = Math.floor(event.pageY / gridLenth);
	ctx.fillStyle = "#0000FF";
	isWall[x][y] = true;
	ctx.fillRect(x * gridLenth + 1, y * gridLenth + 1, gridLenth - 2, gridLenth - 2);
}
