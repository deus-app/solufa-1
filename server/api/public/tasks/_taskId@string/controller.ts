import { taskRepo } from 'domain/task/repository/taskRepo';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params }) => {
    const task = await taskRepo.findById(params.taskId);

    return task !== null ? { status: 200, body: task } : { status: 404 };
  },
}));
