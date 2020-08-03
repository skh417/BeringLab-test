export default class Editor {
  constructor(...str) {
    this.cells = [[...str]];
  }

  changeText(cellIndex, newText) {
    let lastHistory = this.cells[this.cells.length - 1];
    let newHistory = lastHistory.slice();
    newHistory.splice(cellIndex, 1, [newText]);
    this.cells.push(newHistory);
    return this.cells[this.cells.length - 1];
  }

  addCell(cellIndex) {
    let lastHistory = this.cells[this.cells.length - 1];
    let newHistory = lastHistory.slice();
    newHistory.splice(cellIndex, 0, [""]);
    this.cells.push(newHistory);
    return this.cells[this.cells.length - 1];
  }

  removeCell(cellIndex) {
    let lastHistory = this.cells[this.cells.length - 1];
    let newHistory = lastHistory.slice();
    newHistory.splice(cellIndex, 1);
    this.cells.push(newHistory);
    return this.cells[this.cells.length - 1];
  }

  mergeCell(targetCellIndex, sourceCellIndex) {
    let lastHistory = this.cells[this.cells.length - 1];
    let newHistory = lastHistory.slice();
    let mergedText =
      newHistory[targetCellIndex][0] + newHistory[sourceCellIndex][0];
    newHistory[targetCellIndex] = [mergedText];
    newHistory.splice(sourceCellIndex, 1);
    this.cells.push(newHistory);
    return this.cells[this.cells.length - 1];
  }

  undo() {
    this.cells.length > 1 ? this.cells.pop() : this.cells;
  }

  redo() {
    this.cells.push(this.cells[0]);
  }
}
