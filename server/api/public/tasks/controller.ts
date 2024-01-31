import { taskRepo } from 'domain/task/repository/taskRepo';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ query }) => {
    const tasks = await taskRepo.findAll(query?.limit);

    return { status: 200, body: tasks };
  },
}));
