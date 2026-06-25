import { rock, paper, scissors } from './gameValues.js';

const WINNING_MOVES = {
  [rock]: {
    beats: scissors,
    action: 'crushes',
  },
  [paper]: {
    beats: rock,
    action: 'covers',
  },
  [scissors]: {
    beats: paper,
    action: 'cuts',
  },
};

export function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player === computer) {
    return "It's a tie!";
  }
  const playerMove = WINNING_MOVES[player];

  return playerMove.beats === computer
    ? `You Win! ${player} ${playerMove.action} ${computer}`
    : `You Lose! ${computer} ${WINNING_MOVES[computer].action} ${player}`;
}
