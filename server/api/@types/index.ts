export type TweetEntity = {
  id: string
  userId: string
  text: string
  createdAt: string
}

export type NewTweetEntity = {
  text: string
}

export type UserEntity = {
  id: string
  name: string
  photoURL?: string | undefined
}
