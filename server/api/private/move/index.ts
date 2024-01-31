import type * as Types from 'api/@types';

export type Methods = {
  post: {
    status: 200;
    /** Move made successfully */
    resBody: Types.GameStateEntity;

    reqBody: {
      position: {
        x: number;
        y: number;
      };
    };
  };
};
