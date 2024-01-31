export type UserEntity = {
  id: string;
  name: string;
  photoURL: string | undefined;
};

export type TaskEntity = {
  id: string;
  label: string;
  done: boolean;
  createdTime: number;
  image: { url: string; s3Key: string } | undefined;
  author: UserEntity;
};
