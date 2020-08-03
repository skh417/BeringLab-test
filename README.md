# Cell Editor 구현

- changeText(cellIndex, newText)<br />
cellIndex 셀의 텍스트를 newText로 변경

- getText(cellIndex)<br />
cellIndex 셀의 텍스트를 리턴

- addCell(cellIndex)<br />
cellIndex 셀 바로 다음에 빈 텍스트를 가진 새로운 셀을 추가

- removeCell(cellIndex)<br />
cellIndex 셀을 배열에서 제거

- mergeCell(targetCellIndex, sourceCellIndex)<br />
targetCellIndex 셀의 텍스트를 sourceCellIndex 셀의 텍스트와 합친 것으로 변경 및 sourceCellIndex 셀 제거

- undo()<br />
바로 전으로 되돌리기 (redo()로 수행한 액션도 되돌리기 가능)

- redo()<br />
최초의 상태로 되돌리기
