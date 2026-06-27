import { getPlayerSelection } from './getPlayerSelection.js';
import { computerPlay } from './computerPlay.js';
import { playRound } from './playRound.js';
import { GAME_VALUES } from './gameValues.js';
import { GAME_ENDED_MESSAGES, GAME_QUIT_MESSAGES} from './gameStatusMessages/gameEndMessages.js'

import { gameImages } from './gameStatusMessages/gameImages.js';
import { greetUser } from './gameStatusMessages/greetUser.js';
import { printRoundSummary } from './gameStatusMessages/printRoundSummary.js';
import { printCurrentScore } from './gameStatusMessages/printCurrentScore.js';
import { printFinalResults } from './gameStatusMessages/printFinalResults.js';
import { printWinMessage } from './gameStatusMessages/printWinMessage.js';
import { printDefeatMessage } from './gameStatusMessages/printDefeatMessage.js';
import { printStalemateMessage } from './gameStatusMessages/printStalemateMessage.js';
import { sleep } from './utils/sleep.js';
import { confirmStartGame } from './confirmStartGame.js';
import { getRandomItemFromArray } from './utils/getRandomItemFromArray.js';

export async function game() {
  const maxRounds = 5;

  let playerScore = 0;
  let computerScore = 0;
  let round = 1;

  const confirmedStart = await confirmStartGame();

  if(!confirmedStart)
  {
    console.log(getRandomItemFromArray(GAME_QUIT_MESSAGES));
    return;
  }

  greetUser();

  while (round <= maxRounds) {
    printRoundSummary(round, maxRounds, playerScore, computerScore);

    const playerChoice = await getPlayerSelection();

    if(playerChoice === 'Terminating')
    {
      console.log(getRandomItemFromArray(GAME_QUIT_MESSAGES));
      return;
    }



    if (playerChoice === 'Restart') {
      console.clear();
      return game();
    }

    const computerChoice = computerPlay();

    console.log('\n🧑 You chose:');
    console.log(gameImages[GAME_VALUES.indexOf(playerChoice)]);

    console.log('🤖 Computer chose:');
    console.log(gameImages[GAME_VALUES.indexOf(computerChoice)]);

    const message = playRound(playerChoice, computerChoice);

    console.log(message);

    if (message.startsWith('You Win')) playerScore++;

    if (message.startsWith('You Lose')) computerScore++;

    printCurrentScore(playerScore, computerScore);

    round++;
  }

  printFinalResults(playerScore, computerScore);

  if (playerScore > computerScore) printWinMessage();

  if (computerScore > playerScore) printDefeatMessage();

  if (playerScore === computerScore) printStalemateMessage();

  await sleep();
  if (confirm('Want to start a new game?')) {
    console.clear();
    return game();
  }
  else
  {
    console.log(getRandomItemFromArray(GAME_ENDED_MESSAGES));
  }
}
