import { expect, test } from 'vitest';
import { apiClient } from './apiClient';
import { OTHER_USER_ID, SELF_USER_ID } from 'tests/const';

// POST: /api/private/documents
const createDocument = async () => {
  const res = await apiClient.private.documents.post({
    body: {
      id: 'new-document',
      userId: SELF_USER_ID,
      title: 'New Document',
      content: 'Document content',
      createdAt: new Date().toISOString(),
    },
  });
  expect(res.status === 201).toBeTruthy();
  return res.body;
};

test('GET: /api/private/documents', async () => {
  const res = await apiClient.private.documents.get();
  expect(res.status === 200).toBeTruthy();
});

test('POST: /api/private/documents', async () => {
  await createDocument();
});

test('GET: /api/private/documents/_documentId@string', async () => {
  const document = await createDocument();
  const res = await apiClient.private.documents._documentId(document.id).get();
  expect(res.status === 200).toBeTruthy();
});

test('PUT: /api/private/documents/_documentId@string', async () => {
  const document = await createDocument();
  const res = await apiClient.private.documents._documentId(document.id).put({
    body: { ...document, title: 'Updated Document' },
  });
  expect(res.status === 200).toBeTruthy();
});

test('DELETE: /api/private/documents/_documentId@string', async () => {
  const document = await createDocument();
  const res = await apiClient.private.documents._documentId(document.id).delete();
  expect(res.status === 204).toBeTruthy();
});

test('GET: /api/public/documents', async () => {
  const res = await apiClient.public.documents.get();
  expect(res.status === 200).toBeTruthy();
});

test('GET: /api/public/documents/_documentId@string', async () => {
  const document = await createDocument();
  const res = await apiClient.public.documents._documentId(document.id).get();
  expect(res.status === 200).toBeTruthy();
});

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

test('GET: /api/public/timeline', async () => {
  const res = await apiClient.public.timeline.get();
  expect(res.status === 200).toBeTruthy();
});

test('GET: /api/private/tweets', async () => {
  const res = await apiClient.private.tweets.get();
  expect(res.status === 200).toBeTruthy();
});

test('POST: /api/private/tweets', async () => {
  const res = await apiClient.private.tweets.post({
    body: { text: 'Hello, world!' },
  });
  expect(res.status === 201).toBeTruthy();
});

test('POST: /api/private/move', async () => {
  const res = await apiClient.private.move.post({
    body: { position: { x: 0, y: 0 } },
  });
  expect(res.status === 200).toBeTruthy();
});
