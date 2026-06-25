import { GAME_VALUES } from "./gameValues.js";
import { getRandomItemFromArray } from "./utils/getRandomItemFromArray.js";

export function computerPlay()
{
    return getRandomItemFromArray(GAME_VALUES);
}