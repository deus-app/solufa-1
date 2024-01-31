import { expect, test } from 'vitest';
import { apiClient, sampleBlob } from './apiClient';

test('GET: /api/public/tasks', async () => {
  const res = await apiClient.public.tasks.get();
  expect(res.status === 200).toBeTruthy();
});

test('GET: /api/public/tasks/_taskId@string', async () => {
  const task = await apiClient.private.tasks.post({ body: { label: 'task 2' } });
  const res = await apiClient.public.tasks._taskId(task.body.id).get();
  expect(res.status === 200).toBeTruthy();
});

test('POST: /api/private/tasks', async () => {
  const res = await apiClient.private.tasks.post({ body: { label: 'task 1', image: sampleBlob } });
  expect(res.status === 201).toBeTruthy();
});

test('GET: /api/private/tasks/_taskId@string', async () => {
  const task = await apiClient.private.tasks.post({ body: { label: 'task 2' } });
  const res = await apiClient.private.tasks._taskId(task.body.id).get();
  expect(res.status === 200).toBeTruthy();
});

test('PATCH: /api/private/tasks/_taskId@string', async () => {
  const task = await apiClient.private.tasks.post({ body: { label: 'task 2' } });
  const res = await apiClient.private.tasks._taskId(task.body.id).patch({
    body: { label: task.body.label, done: true },
  });
  expect(res.status === 200).toBeTruthy();
});

test('DELETE: /api/private/tasks/_taskId@string', async () => {
  const task = await apiClient.private.tasks.post({ body: { label: 'task 3', image: sampleBlob } });
  const res = await apiClient.private.tasks._taskId(task.body.id).delete();
  expect(res.status === 204).toBeTruthy();
});
