export const checkBlock = (stage, block, position): boolean => {

  const newX = position.x + block.shape[0].length;
  const newY = position.y + block.shape.length;
  
  if (
    newY >= stage.length || // 밑 바닥에 닿음
    newX < 0 || newX >= stage[0].length// 좌우 경계에 닿음
    //newY >= 0 && stage[newY][newX] !== 0 // 다른 블록과 겹침
  ) {
    return true; // 충돌 발생
  }
      

  return false; // 충돌 없음
}