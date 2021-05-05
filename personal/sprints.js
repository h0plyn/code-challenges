function getMostVisited(n, sprints) {
  let visits = new Array(n + 1).fill(0);
  let mostVisited = 0;

  for (let i = 0; i < sprints.length - 1; i++) {
    const start = sprints[i];
    const end = sprints[i + 1];
    const direction = Math.sign(start - end) === -1 ? 'out' : 'back';

    let currentPosition = start;
    if (direction === 'out') {
      while (currentPosition <= end) {
        visits[currentPosition] += 1;
        if (visits[currentPosition] > mostVisited)
          mostVisited = visited[currentPosition];
        currentPosition += 1;
      }
    } else {
      while (currentPosition >= end) {
        visits[currentPosition] += 1;
        if (visits[currentPosition] > mostVisited)
          mostVisited = visited[currentPosition];
        currentPosition -= 1;
      }
    }
  }

  for (let i = 0; i < visits.length; i++) {
    if (visits[i] === mostVisited) return i;
  }
}
