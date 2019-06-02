export const PLAYER_MESSAGES = {
  init: `빙고 한 판 할까요?`,
  turn: `숫자를 선택하세요.`,
  wait: `상대방의 선택을 기다리는 중입니다.`
};

export const NUM_BINGO_BLOCK = 25;

export const PLAYER_NUM_ARR = [1, 2];

export const BINGO_ARR = ["B", "I", "N", "G", "O"];

export const ROW_BINGO_ARR = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24]
];

export const COL_BINGO_ARR = [
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24]
];

export const CROSS_BINGO_ARR = [[0, 6, 12, 18, 24], [4, 8, 12, 16, 20]];
