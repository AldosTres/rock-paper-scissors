import { getRandomItemFromArray } from '../utils/getRandomItemFromArray.js';
import { isDomainError } from './domainErrors.js';
import { QUIRKY_UNKNOWN_ERROR_MESSAGES } from './errorMessages.js';

export function handleErrors(error) {
  if (isDomainError(error)) {
    console.log(error.message);
    return;
  }

  console.log(getRandomItemFromArray(QUIRKY_UNKNOWN_ERROR_MESSAGES));
}
