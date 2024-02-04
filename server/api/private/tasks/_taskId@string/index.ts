import type { TaskEntity } from 'api/@types';

export type Methods = {
  get: {
    resBody: TaskEntity;
  };

  patch: {
    reqBody: {
      done: boolean;
      label: string;
    };
    resBody: TaskEntity;
  };

  delete: {
    status: 204;
  };
};
