import type { TaskEntity } from 'api/@types';

export type Methods = {
  post: {
    reqFormat: FormData;
    reqBody: {
      label: string;
      image?: Blob;
    };
    resBody: TaskEntity;
  };
};
