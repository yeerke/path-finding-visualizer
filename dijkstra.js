function shortestPath() {
    let used = initializeArray(false, 14, 14);
    used[startPoint.x][startPoint.y] = true;

    let parent = initializeArray(new Point(), 14, 14);

    let q = new Queue();
    q.push(startPoint);

    let path = new Array();
    while (!q.isEmpty()) {
        let position = q.front();
        q.pop();
        path.push(position);
        if (position.isEqual(endPoint)) break;
        for (let dx = -1; dx <= 1; ++dx) {
            for (let dy = -1; dy <= 1; ++dy) {
                if (Math.abs(dx) + Math.abs(dy) == 2) continue;
                if (!isValid(position.x + dx) || !isValid(position.y + dy)) continue;
                if (used[position.x + dx][position.y + dy]) continue;
                if (isWall[position.x + dx][position.y + dy]) continue;
                parent[position.x + dx][position.y + dy] = position
                used[position.x + dx][position.y + dy] = true;
                q.push(new Point(position.x + dx, position.y + dy));
            }
        }
    }
    return [path, parent];
}

function isValid(pos) {
    if (pos < 0 || pos >= 14) {
        return false;
    }
    return true;
}