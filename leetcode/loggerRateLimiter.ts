class Logger {
  private _wait: { [key: string]: number };

  constructor() {
    this._wait = {};
  }

  shouldPrintMessage(timestamp: number, message: string): boolean {
    if (this._wait[message]) {
      // if the message is in the map
      if (timestamp < this._wait[message]) {
        // if the timestamp is less than the corresponding map timestamp, return false
        return false;
      }
    }

    this._wait[message] = timestamp + 10; // add the message and timestamp + 10 to the map
    return true;
  }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
