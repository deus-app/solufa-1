import type * as Types from 'api/@types'

export type Methods = {
  get: {
    status: 200
    /** A list of tweets */
    resBody: Types.TweetEntity[]
  }
}
