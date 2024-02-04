import { taskUseCase } from 'domain/task/useCase/taskUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ user, body }) => {
    const task = await taskUseCase.create(user, body.label, body.image);

    return { status: 201, body: task };
  },
}));
