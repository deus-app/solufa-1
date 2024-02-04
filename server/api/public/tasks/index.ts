import type { TaskEntity } from 'api/@types';

export type Methods = {
  get: {
    query?: {
      limit?: number;
    };
    resBody: TaskEntity[];
  };
};
