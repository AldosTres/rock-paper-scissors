import { ValidationError } from './errors/domainErrors.js';

import { QUIRKY_AND_INFORMATIVE_USER_INPUT_ERROR_MESSAGES } from './errors/errorMessages.js';
import {
  GAME_VALUES,
  VALID_ALTERNATIVE_SELECTIONS,
  mapAlternativeSelectionToGameValue,
} from './gameValues.js';
import { getRandomItemFromArray } from './utils/getRandomItemFromArray.js';
import { handleErrors } from './errors/handleErrors.js';

export function getPlayerSelection() {
  while (true) {
    const playerSelection = prompt(
      `Please select one of the following: ${GAME_VALUES.join(', ')}. (Type \'Restart\' to restart the game)`,
    );

    try {
      const trimmedPlayerSelection = playerSelection?.trim();

      if (trimmedPlayerSelection !== 'Restart') {
        ensureValidPlayerSelection(trimmedPlayerSelection);

        return mapAlternativeSelectionToGameValue(trimmedPlayerSelection);
      } else {
        if (confirm('Are you sure you want to restart the game?')) {
          return 'Restart';
        }
      }
    } catch (error) {
      handleErrors(error);
    }
  }
}

function ensureValidPlayerSelection(playerSelection) {
  const normalizedPlayerSelection = playerSelection.toLowerCase();

  const isCompleteValue = GAME_VALUES.includes(normalizedPlayerSelection);

  const isAlternativeSelection = Object.values(
    VALID_ALTERNATIVE_SELECTIONS,
  ).some((gameValueAlternatives) =>
    gameValueAlternatives.includes(normalizedPlayerSelection),
  );

  if (!isCompleteValue && !isAlternativeSelection)
    throw new ValidationError(
      getRandomItemFromArray(QUIRKY_AND_INFORMATIVE_USER_INPUT_ERROR_MESSAGES),
    );
}
