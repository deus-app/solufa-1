import type { TaskEntity } from 'api/@types';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  post: {
    reqFormat: FormData;
    reqBody: {
      label: string;
      image?: Blob;
    };
    resBody: TaskEntity;
  };
}>;
