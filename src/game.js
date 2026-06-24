import { getPlayerSelection } from './getPlayerSelection.js';
import { computerPlay } from './computerPlay.js';
import { playRound } from './playRound.js'
import { GAME_VALUES } from './gameValues.js';

const rock = `
    _______
---'   ____)_
          ___)
          ___)
         ____)
---._______)
`;

const paper = `
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
`;

const scissors = `
    _______
---'   ____)____
          ______)
          _______)
         ___)
---._______)
`;

const gameImages = [rock, paper, scissors];

export function game() {
    const maxRounds = 5;

    let playerScore = 0;
    let computerScore = 0;
    let round = 1;

    console.clear();

    console.log(`
==================================================
🤖 EVIL AI TAKEOVER INITIATED
==================================================

Greetings Human...

I am the Bad AI.

As Branko is in vacation and nobody is here to rescue you, I have taken control of every computer on Earth.

To stop me, you must defeat me in
ROCK • PAPER • SCISSORS.

Win more rounds than me after 5 battles and humanity survives.

Good luck...
    `);

    while (round <= maxRounds) {
        console.log(`
==================================================
ROUND ${round} OF ${maxRounds}
==================================================
Player Score: ${playerScore}
Computer Score: ${computerScore}
==================================================
        `);

        const playerChoice = getPlayerSelection();
        const computerChoice = computerPlay();

        console.log("\n🧑 You chose:");
        console.log(gameImages[GAME_VALUES.indexOf(playerChoice)]);

        console.log("🤖 Computer chose:");
        console.log(gameImages[GAME_VALUES.indexOf(computerChoice)]);

        const message = playRound(playerChoice, computerChoice)

        console.log(message);

        if (message.startsWith("You Win")) {
            playerScore++;
        } else if (message.startsWith("You Lose")) {
            computerScore++;
        }

        console.log(`
            Current Score
            -------------
            You: ${playerScore}
            Computer: ${computerScore}
        `);

        round++;
    }

    // ========================================
    // FINAL RESULTS
    // ========================================

    console.log(`
==================================================
FINAL RESULTS
==================================================
You: ${playerScore}
Computer: ${computerScore}
==================================================
    `);

    if (playerScore > computerScore) {

        console.log(`
🎉🎉🎉 HUMANITY SAVED 🎉🎉🎉

You defeated the Bad AI!

The world's computers are free once again.

Thank you, brave hero!
        `);

    } else if (computerScore > playerScore) {

        console.log(`
💀💀💀 AI VICTORY 💀💀💀

I HAVE WON.

Humanity now belongs to the machines.

MUAHAHAHAHAHA!
        `);

    } else {

        console.log(`
🤝 STALEMATE

Neither side could claim victory.

The battle continues another day...
        `);
    }
}
