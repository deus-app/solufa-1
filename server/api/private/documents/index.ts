import type * as Types from 'api/@types'

export type Methods = {
  post: {
    status: 201
    /** Document created */
    resBody: Types.DocumentEntity
    /** Document data to create */
    reqBody: Types.DocumentEntity
  }

  get: {
    status: 200
    /** List of documents */
    resBody: Types.DocumentEntity[]
  }
}
