import { exec } from 'child_process';
import type { FastifyInstance } from 'fastify';
import { init } from 'service/app';
import { PORT } from 'service/envValues';
import { prismaClient } from 'service/prismaClient';
import util from 'util';
import { afterAll, beforeAll } from 'vitest';
import { OTHER_USER, SELF_USER } from './const';

let server: FastifyInstance;

const unneededServer = (file: { filepath?: string } | undefined): boolean =>
  !/\/tests\/api\/.+\.test\.ts$/.test(file?.filepath ?? '');

beforeAll(async (info) => {
  if (unneededServer(info)) return;

  await util.promisify(exec)('npx prisma migrate reset --force');
  await Promise.all(
    [SELF_USER, OTHER_USER].map((user) =>
      prismaClient.user.create({ data: { id: user.sub, name: user.user_metadata.name } })
    )
  );

  server = init();
  await server.listen({ port: PORT, host: '0.0.0.0' });
});

afterAll(async (info) => {
  if (unneededServer(info)) return;

  await server.close();
});
