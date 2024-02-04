import { OTHER_USER_ID, SELF_USER_ID } from 'tests/const';
import { expect, test } from 'vitest';
import { apiClient } from './apiClient';

// POST: /api/private/documents
const createDocument = async (): Promise<{ status: number; body: { id: string } }> => {
  const documentData = { id: 'doc1', title: 'Test Document', content: 'This is a test document.' };
  return await apiClient.private.documents.post({ body: documentData });
};

test('POST: /api/private/documents', async () => {
  const res = await createDocument();
  expect(res.status === 201).toBeTruthy();
});

test('GET: /api/private/documents', async () => {
  const res = await apiClient.private.documents.get();
  expect(res.status === 200).toBeTruthy();
});

test('GET: /api/private/documents/_documentId@string', async () => {
  const {
    body: { id },
  } = await createDocument();
  const res = await apiClient.private.documents._documentId(id).get();
  expect(res.status === 200).toBeTruthy();
});

test('PUT: /api/private/documents/_documentId@string', async () => {
  const {
    body: { id },
  } = await createDocument();
  const updatedDocumentData = {
    id,
    title: 'Updated Test Document',
    content: 'This is an updated test document.',
  };
  const res = await apiClient.private.documents._documentId(id).put({ body: updatedDocumentData });
  expect(res.status === 200).toBeTruthy();
});

test('DELETE: /api/private/documents/_documentId@string', async () => {
  const {
    body: { id },
  } = await createDocument();
  const res = await apiClient.private.documents._documentId(id).delete();
  expect(res.status === 204).toBeTruthy();
});

test('GET: /api/public/documents', async () => {
  const res = await apiClient.public.documents.get();
  expect(res.status === 200).toBeTruthy();
});

test('GET: /api/public/documents/_documentId@string', async () => {
  const {
    body: { id },
  } = await createDocument();
  const res = await apiClient.public.documents._documentId(id).get();
  expect(res.status === 200).toBeTruthy();
});

test('POST: /api/private/move', async () => {
  const moveData = { position: { x: 0, y: 1 } };
  const res = await apiClient.private.move.post({ body: moveData });
  expect(res.status === 200).toBeTruthy();
});

test('GET: /api/public/game', async () => {
  const res = await apiClient.public.game.get();
  expect(res.status === 200).toBeTruthy();
});

test('POST: /api/public/game', async () => {
  const gameData = {
    player1: { id: SELF_USER_ID, name: 'Player 1' },
    player2: { id: OTHER_USER_ID, name: 'Player 2' },
  };
  const res = await apiClient.public.game.post({ body: gameData });
  expect(res.status === 201).toBeTruthy();
});
