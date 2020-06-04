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
	drawNext(points, grey);
	setTimeout(function() {
		drawNext(path, red)
	}, points.length * time + 2000);
}

function drawNext(path, color) {
	if (path.length === 0) {
		isAbleToClick = true;
		return;
	}
	let position = path[0];
	path.shift();
	ctx.fillStyle = color;
	if (!position.isEqual(startPoint) && !position.isEqual(endPoint)) {
		ctx.fillRect(position.x * gridLenth + 1, position.y * gridLenth + 1, gridLenth - 2, gridLenth - 2);
	}
	setTimeout(function() {
		drawNext(path);
	}, time);
}

function drawPoint(color, x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x * gridLenth + 1, y * gridLenth + 1, gridLenth - 2, gridLenth - 2);
}

function clear() {
	ctx.fillStyle = white;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i < canvas.width; i += gridLenth) {
		ctx.moveTo(i, 0);
		ctx.lineTo(i, canvas.height);
		ctx.stroke();
	}
	for (let i = 0; i < canvas.height; i += gridLenth) {
		ctx.moveTo(0, i);
		ctx.lineTo(canvas.width, i);
		ctx.stroke();
	}
	drawPoint(green, endPoint.x, endPoint.y);
    drawPoint(yellow, startPoint.x, startPoint.y);
}

function tryDrawWal(event) {
	if (!canDraw) return; 
	let pos = getMousePos(event);
	let x = Math.floor(pos.x / gridLenth);
	let y = Math.floor(pos.y / gridLenth);
	ctx.fillStyle = blue;
	isWall[x][y] = true;
	ctx.fillRect(x * gridLenth + 1, y * gridLenth + 1, gridLenth - 2, gridLenth - 2);
}

function movePoint(event) {
	let pos = getMousePos(event);
	let x = Math.floor(pos.x / gridLenth);
	let y = Math.floor(pos.y / gridLenth);
	ctx.fillStyle = white;
    if (movingPoint == 1) {
        ctx.fillRect(startPoint.x * gridLenth + 1, startPoint.y * gridLenth + 1, gridLenth - 2, gridLenth - 2);
        drawPoint(yellow, x, y);
        startPoint = new Point(x, y);
    } else {
        ctx.fillRect(endPoint.x * gridLenth + 1, endPoint.y * gridLenth + 1, gridLenth - 2, gridLenth - 2);
        drawPoint(green, x, y);
        endPoint = new Point(x, y);
    }
}
