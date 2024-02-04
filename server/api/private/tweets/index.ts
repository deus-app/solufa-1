import type * as Types from 'api/@types'

export type Methods = {
  get: {
    status: 200
    /** A list of user's tweets */
    resBody: Types.TweetEntity[]
  }

  post: {
    status: 201
    /** Tweet created */
    resBody: Types.TweetEntity
    reqBody: Types.NewTweetEntity
  }
}
