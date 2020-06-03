function shortestPath(x1, y1, x2, y2, isWall) {
    var q = new Queue();
    q.push([x1, y1]);
    var used = new Array(14);
    for (let i = 0; i < used.length; i++) {
        used[i] = new Array(14);
        for (let j = 0; j < used[i].length; ++j) {
            used[i][j] = false;
        }
    }
    used[x1][y1] = true;

    var list = new Queue();

    while (!q.isEmpty()) {
        let f = q.front();
        list.push(f);
        if (f[0] == x2 && f[1] == y2) break;
        q.pop();
        for (let dx = -1; dx <= 1; ++dx) {
            for (let dy = -1; dy <= 1; ++dy) {
                if (Math.abs(dx) + Math.abs(dy) == 2) continue;
                if (f[0] + dx < 0 || f[0] + dx >= 14) continue;
                if (f[1] + dy < 0 || f[1] + dy >= 14) continue;
                if (used[f[0] + dx][f[1] + dy]) continue;
                if (isWall[f[0] + dx][f[1] + dy]) continue;
                used[f[0] + dx][f[1] + dy] = true;
                q.push([f[0] + dx, f[1] + dy]);
            }
        }
    }
    return list;
}