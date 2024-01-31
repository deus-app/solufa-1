export type UserEntity = {
  id: string
  name: string
  photoURL?: string | undefined
}

export type GameStateEntity = {
  id: string
  board: ('empty' | 'black' | 'white')[][]
  currentTurn: 'black' | 'white'
  player1: UserEntity
  player2: UserEntity
  /** none indicates the game is still in progress */
  winner: 'black' | 'white' | 'draw' | 'none'
}
