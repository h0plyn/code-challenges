interface Board {
  [key: number]: number;
}

class Leaderboard {
  public _leaderboard: Board;

  constructor() {
    this._leaderboard = {};
  }

  // O(1)
  addScore(playerId: number, score: number): void {
    if (this._leaderboard[playerId]) {
      this._leaderboard[playerId] += score; // increment a returning players score
    } else {
      this._leaderboard[playerId] = score; // create a player and add score
    }
  }

  // O(nlogn) - we sort our hashmap each time this method is called
  top(K: number): number {
    const sortObj: number[] = Object.values(this._leaderboard).sort(
      // sort by values
      (a: number, b: number) => b - a
    );
    const topKScores: number[] = sortObj.slice(0, K); // only include first K elements
    let total: number = 0;
    for (let i = 0; i < topKScores.length; i++) {
      total += topKScores[i]; // add K scores to get total
    }
    return total;
  }

  // O(1)
  reset(playerId: number): void {
    this._leaderboard[playerId] = 0;
  }
}

const testboard = new Leaderboard();
testboard.addScore(1, 73);
testboard.addScore(2, 56);
testboard.addScore(3, 39);
testboard.addScore(4, 51);
testboard.addScore(5, 4);
console.log(testboard);
console.log(testboard.top(1));

/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */
