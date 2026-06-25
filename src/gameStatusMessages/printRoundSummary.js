export function printRoundSummary(
  round,
  maxRounds,
  playerScore,
  computerScore,
) {
  console.log(`
==================================================
ROUND ${round} OF ${maxRounds}
==================================================
Player Score: ${playerScore}
Computer Score: ${computerScore}
==================================================
        `);
}
