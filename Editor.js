export default class Editor {
  constructor(...str) {
    this.cells = [[...str]];
  }

  changeText(cellIndex, newText) {
    let lastLog = this.cells[this.cells.length - 1];
    let change = lastLog.slice();
    change.splice(cellIndex, 1, [newText]);
    this.cells.push(change);
    return this.cells[this.cells.length - 1];
  }

  addCell(cellIndex) {
    let lastLog = this.cells[this.cells.length - 1];
    let change = lastLog.slice();
    change.splice(cellIndex, 0, [""]);
    this.cells.push(change);
    return this.cells[this.cells.length - 1];
  }

  removeCell(cellIndex) {
    let lastLog = this.cells[this.cells.length - 1];
    let change = lastLog.slice();
    change.splice(cellIndex, 1);
    this.cells.push(change);
    return this.cells[this.cells.length - 1];
  }

  mergeCell(targetCellIndex, sourceCellIndex) {
    let lastLog = this.cells[this.cells.length - 1];
    let change = lastLog.slice();
    let mergedText = change[targetCellIndex][0] + change[sourceCellIndex][0];
    change[targetCellIndex] = [mergedText];
    change.splice(sourceCellIndex, 1);
    this.cells.push(change);
    return this.cells[this.cells.length - 1];
  }

  undo() {
    this.cells.length > 1 ? this.cells.pop() : this.cells;
  }

  redo() {
    this.cells.push(this.cells[0]);
  }
}
