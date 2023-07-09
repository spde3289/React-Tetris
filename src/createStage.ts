const STAGE_WIDTH = 10;
const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill(0)
);