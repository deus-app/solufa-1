import { taskRepo } from 'domain/task/repository/taskRepo';
import { taskUseCase } from 'domain/task/useCase/taskUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ user, params }) => {
    const task = await taskRepo.findUsersTaskById(user, params.taskId);

    return task !== null ? { status: 200, body: task } : { status: 404 };
  },
  patch: async ({ user, params, body }) => {
    const task = await taskUseCase.update(user, params.taskId, body.done, body.label);

    return task !== null ? { status: 200, body: task } : { status: 404 };
  },
  delete: async ({ user, params }) => {
    const result = await taskUseCase.delete(user, params.taskId);

    return result ? { status: 204 } : { status: 404 };
  },
}));
