import { sleep } from './utils/sleep.js';

export async function confirmStartGame() {
  await sleep();
  confirm('Welcome to Rock, Paper, Scissors!');
}
