import { ValidationError } from './errors/domainErrors.js';

import { QUIRKY_AND_INFORMATIVE_USER_INPUT_ERROR_MESSAGES } from './errors/errorMessages.js';
import { GAME_VALUES } from './gameValues.js';
import { getRandomItemFromArray } from './utils/getRandomItemFromArray.js';
import { handleErrors } from './errors/handleErrors.js';

export function getPlayerSelection() {
  while (true) {
    try {
      const playerSelection = prompt(
        `Please select one of the following: ${GAME_VALUES.join(', ')}`,
      );

      const trimmedPlayerSelection = playerSelection?.trim();

      ensureValidPlayerSelection(trimmedPlayerSelection);

      return trimmedPlayerSelection;
    } catch (error) {
      handleErrors(error);
    }
  }
}

function ensureValidPlayerSelection(playerSelection) {
  const normalizedPlayerSelection = playerSelection.toLowerCase();

  if (!GAME_VALUES.includes(normalizedPlayerSelection))
    throw new ValidationError(
      getRandomItemFromArray(QUIRKY_AND_INFORMATIVE_USER_INPUT_ERROR_MESSAGES),
    );
}
