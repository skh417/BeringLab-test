export default class Editor {
  constructor(...str) {
    this.cells = [...str];
  }

  changeText(cellIndex, newText) {
    this.cells[cellIndex].splice(0, 1, newText);
  }

  addCell(cellIndex) {
    this.cells.splice(cellIndex, 0, [""]);
  }

  removeCell(cellIndex) {
    this.cells.splice(cellIndex, 1);
  }

  mergeCell(targetCellIndex, sourceCellIndex) {
    let merged =
      this.cells[targetCellIndex][0] + this.cells[sourceCellIndex][0];
    this.cells[targetCellIndex][0] = merged;
    this.cells.splice(sourceCellIndex, 1);
  }
}
