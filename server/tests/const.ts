import { randomUUID } from 'crypto';
import type { JwtUser } from 'service/types';

export const SELF_USER: JwtUser = { sub: randomUUID(), user_metadata: { name: 'self user' } };
export const OTHER_USER: JwtUser = { sub: randomUUID(), user_metadata: { name: 'other user' } };

export const SELF_USER_ID = SELF_USER.sub;
export const OTHER_USER_ID = OTHER_USER.sub;
