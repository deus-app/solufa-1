import type { TaskEntity } from 'api/@types';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
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
}>;
