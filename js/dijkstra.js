function shortestPath() {
    let used = initializeArray(false, length, height);
    used[startPoint.x][startPoint.y] = true;

    let parent = initializeArray(new Point(), length, height);

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
                if (!isValidPoint(new Point(position.x + dx, position.y + dy))) continue;
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

