export const CONSOLE_INSTRUCTIONS = [
  { browser: 'Chrome', shortcut: 'F12 or Ctrl+Shift+J (Cmd+Option+J on Mac)' },
  { browser: 'Edge', shortcut: 'F12 or Ctrl+Shift+J (Cmd+Option+J on Mac)' },
  { browser: 'Firefox', shortcut: 'F12 or Ctrl+Shift+K (Cmd+Option+K on Mac)' },
  {
    browser: 'Safari',
    shortcut:
      'Enable the Develop menu in Preferences > Advanced, then press Cmd+Option+C',
  },
];

export function getConsoleInstructionsText() {
  const lines = CONSOLE_INSTRUCTIONS.map(
    ({ browser, shortcut }) => `${browser}: ${shortcut}`,
  );

  return `🖥️ Open your browser console to play (so you can see my messages):\n${lines.join('\n')}`;
}
