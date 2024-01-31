import type * as Types from 'api/@types';

export type Methods = {
  get: {
    status: 200;
    /** Game state retrieved successfully */
    resBody: Types.GameStateEntity;
  };

  post: {
    status: 201;
    /** New game started successfully */
    resBody: Types.GameStateEntity;

    reqBody: {
      player1: Types.UserEntity;
      player2: Types.UserEntity;
    };
  };
};
