import type * as Types from 'api/@types'

export type Methods = {
  get: {
    status: 200
    /** Successful response */
    resBody: Types.DocumentEntity[]
  }
}
