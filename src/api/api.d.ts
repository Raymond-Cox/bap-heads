export interface Collection {
  /**
   * OSRS username
   */
  username: string
  displayName: string
  /**
   * The type of account the user has
   */
  accountType:
    | 'NORMAL'
    | 'ironman'
    | 'HARDCORE_IRONMAN'
    | 'ultimate'
    | 'regular'
    | 'HARDCORE_GROUP_IRONMAN'
    | 'UNRANKED_GROUP_IRONMAN'

  /**
   * Total items obtained in the collection
   */
  uniqueObtained: number
  /**
   * Number of items obtained at the last checkpoint
   */
  lastCheckpointUniqueObtained: number
  /**
   * The rank of the user in the collection at the last checkpoint (0-indexed)
   */
  lastCheckpointRankIndex: number
}
