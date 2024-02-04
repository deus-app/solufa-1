export type DocumentEntity = {
  /** Unique identifier for the document */
  id: string
  /** Title of the document */
  title: string
  /** Content of the document */
  content: string
  /** Creation date of the document */
  createdAt?: string | undefined
  /** Last update date of the document */
  updatedAt?: string | undefined
}

export type UserEntity = {
  id: string
  name: string
  photoURL?: string | undefined
}
