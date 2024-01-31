import { OTHER_USER_ID, SELF_USER_ID } from 'tests/const';
import { expect, test } from 'vitest';
import { apiClient } from './apiClient';

test('GET: /api/public/game', async () => {
  const res = await apiClient.public.game.get();
  expect(res.status === 200).toBeTruthy();
});

test('POST: /api/public/game', async () => {
  const res = await apiClient.public.game.post({
    body: {
      player1: { id: SELF_USER_ID, name: 'Player 1' },
      player2: { id: OTHER_USER_ID, name: 'Player 2' },
    },
  });
  expect(res.status === 201).toBeTruthy();
});

test('POST: /api/private/move', async () => {
  // Start a new game to get a game state
  const newGameRes = await apiClient.public.game.post({
    body: {
      player1: { id: SELF_USER_ID, name: 'Player 1' },
      player2: { id: OTHER_USER_ID, name: 'Player 2' },
    },
  });
  const gameId = newGameRes.body.id;

  // Make a move
  const res = await apiClient.private.move.post({
    body: {
      position: { x: 0, y: 0 },
    },
  });
  expect(res.status === 200).toBeTruthy();
});
