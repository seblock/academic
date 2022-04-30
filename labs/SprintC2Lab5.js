class Matrix {
  constructor(string) {
    this._rows = [];
    string.split("\n").forEach((line) => {
      let currentRowValues = [];
      line.split(" ").forEach((number) => {
        currentRowValues.push(parseInt(number));
      });
      this._rows.push(currentRowValues);
    });

    this._columns = [];
    for (let index = 0; index < this.rows[0].length; index++) {
      let currentColumnValues = [];
      for (let innerIndex = 0; innerIndex < this.rows.length; innerIndex++) {
        currentColumnValues.push(this.rows[innerIndex][index]);
      }
      this._columns.push(currentColumnValues);
    }
  }
  get rows() {
    return this._rows;
  }
  get columns() {
    return this._columns;
  }
}
