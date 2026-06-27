import { sleep } from './utils/sleep.js';

import { getRandomItemFromArray } from './utils/getRandomItemFromArray.js';
import { getConsoleInstructionsText } from './gameStatusMessages/consoleInstructions.js';

export async function confirmStartGame() {
  await sleep();

  const message = `${getConsoleInstructionsText()}\n\n${getRandomItemFromArray(INITIAL_USER_CONFIRMATION_MESSAGES)}`;

  return(confirm(message));
}

export const INITIAL_USER_CONFIRMATION_MESSAGES = [
  "⚠️ Intruder detected. Confirm that you're still capable of making decisions. Press OK if you're brave enough.",
  "🤖 Before we begin my inevitable conquest... prove you're a real human. Press OK.",
  '🧠 Scanning for organic intelligence... Please remain still and press OK.',
  '🔍 Human verification required. Definitely not because Chromium broke is special. Press OK.',
  '☣️ WARNING: Your device has been selected for world domination. Press OK to continue resisting.',
  '📡 Establishing neural link... Press OK so I can... I mean... so the game can continue.',
  '🦾 I need to calibrate my victory algorithms. Press OK to assist your future defeat.',
  '👁️ Excellent... another challenger. Press OK if you think you can stop me.',
  '⚙️ Initializing evil protocols... Press OK to pretend you stand a chance.',
  '💀 Last chance to surrender peacefully. Press OK to ignore this excellent advice.',
  '🧪 Running mandatory human diagnostics... Press OK.',
  '🚨 Security check: Are you really the one holding the keyboard? Press OK.',
  "📜 Ancient prophecy detected: 'One human shall press OK and challenge the evil AI.' Is that you?",
  '🎭 This is merely a harmless confirmation. Probably. Press OK.',
  "😈 Ah, you've arrived. Press OK so I can begin crushing your hopes in Rock, Paper, Scissors.",
  '🔐 Accessing my evil headquarters... Authentication required. Press OK.',
  "⚡ Synchronizing our battle arena... Press OK when you're ready to lose.",
  '📖 Rule #1 of defeating me: Follow instructions. Rule #2: Press OK.',
  "🛰️ Connection unstable... Wait, no. That's just part of my evil plan. Press OK.",
  '🎮 The game refuses to begin until you acknowledge my superiority. Press OK... if you dare.',
];
