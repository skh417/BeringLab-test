export default class Cell {
  getText(cellIndex, newEditor) {
    let latestData = newEditor.cells[newEditor.cells.length - 1];
    return cellIndex < latestData.length
      ? latestData[cellIndex][0]
      : console.log(`cellIndex must be smaller than ${lastesData.length}`);
  }
}
