const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

export const GAME_VALUES = [rock, paper, scissors];

export const VALID_ALTERNATIVE_SELECTIONS = {
  [rock]: [rock, 'rck', 'r', 'roc', 'rok'],
  [paper]: [paper, 'p', 'pa', 'pap'],
  [scissors]: [
    scissors,
    's',
    'sc',
    'sci',
    'sis',
    'scisor',
    'scisor',
    'scissos',
    'scissosrs',
    'scisorss',
  ],
};

export function mapAlternativeSelectionToGameValue(alternativeSelection) {
  let gameValue = null;

  const normalizedAlternativeSelection = alternativeSelection
    .trim()
    .toLowerCase();

  const alternativeEntries = Object.entries(VALID_ALTERNATIVE_SELECTIONS);

  alternativeEntries.forEach(([gameValueKey, alternativesArray]) => {
    if (alternativesArray.includes(normalizedAlternativeSelection)) {
      gameValue = gameValueKey;
    }
  });

  return gameValue;
}
