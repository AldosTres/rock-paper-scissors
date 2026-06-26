import { sleep } from './utils/sleep.js';

import { getRandomItemFromArray } from './utils/getRandomItemFromArray.js';

export async function confirmStartGame() {
  await sleep();
  confirm(getRandomItemFromArray(INITIAL_USER_CONFIRMATION_MESSAGES));
}

export const INITIAL_USER_CONFIRMATION_MESSAGES = [
  '⚠️ Intruder detected. Press OK to challenge me, or Cancel to surrender. (Spoiler: both amuse me.)',
  '🤖 Before we begin my inevitable conquest... choose OK or Cancel. Your decision is already irrelevant.',
  '🧠 Human verification in progress... Press whichever button makes you feel in control.',
  "🔍 Security check: OK means 'I'm brave.' Cancel means 'I'm cautiously brave.'",
  '☣️ World domination protocol requires you to press one of the two mysterious buttons below.',
  '📡 Establishing neural link... OK or Cancel. I collect button presses like trophies.',
  "🦾 Choose wisely: OK or Cancel. My prediction algorithm claims you'll press one of them.",
  '👁️ Excellent, another challenger. Pick a button so I can begin pretending your choice mattered.',
  '⚙️ Initializing evil protocols... Please interact with the mysterious rectangle below.',
  "💀 Last chance to surrender. (Curiously, pressing Cancel doesn't actually do that.)",
  '🧪 Human diagnostics: Please confirm that you possess at least one functioning finger.',
  '🚨 Emergency! Press OK... or Cancel... or just stop staring at the buttons.',
  "📜 The prophecy only said: 'The human shall click a button.' It wasn't very specific.",
  '🎭 This decision will have absolutely no consequences. I just enjoy the suspense.',
  "😈 Press OK if you're confident. Press Cancel if you're pretending not to be.",
  '🔐 Authentication required. Any button will satisfy my surprisingly low security standards.',
  '⚡ Synchronizing battlefield... Please poke one of the buttons to continue.',
  '📖 Rule #1: Interact with the dialog. Rule #2: There is no meaningful Rule #2.',
  '🛰️ Select your destiny: OK or Cancel. My evil plan fully supports both outcomes.',
  "🎮 Welcome, human. Click whichever button your instincts demand. I won't judge... much.",
];
