import type * as Types from 'api/@types'

export type Methods = {
  get: {
    status: 200
    /** Successful response */
    resBody: Types.DocumentEntity
  }

  put: {
    status: 200
    /** Document updated */
    resBody: Types.DocumentEntity
    /** Document data to update */
    reqBody: Types.DocumentEntity
  }

  delete: {
    status: 204
  }
}
