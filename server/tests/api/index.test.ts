import { SELF_USER } from 'tests/const';
import { expect, test } from 'vitest';
import { apiClient } from './apiClient';

test('API接続確認', async () => {
  const res = await apiClient.health.$get();

  expect(res.server).toEqual('ok');
  expect(res.db).toEqual('ok');
});

test('認証エンドポイント確認', async () => {
  const res = await apiClient.private.get();
  expect(res.status).toEqual(200);

  const user = await apiClient.me.$post({ config: { headers: { 'Content-Type': 'text/plain' } } });
  expect(user.id).toEqual(SELF_USER.sub);
  expect(user.name).toEqual(SELF_USER.user_metadata.name);
});
