import { getPlayerSelection } from './getPlayerSelection.js';
import { game } from './game.js';
import { handleErrors } from './errors/handleErrors.js';

try {
  await game();
} catch (error) {
  handleErrors(error);
}
