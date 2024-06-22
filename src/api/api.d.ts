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
        | 'IRONMAN'
        | 'HARDCORE_IRONMAN'
        | 'ULTIMATE_IRONMAN'
        | 'GROUP_IRONMAN'
        | 'HARDCORE_GROUP_IRONMAN'
        | 'UNRANKED_GROUP_IRONMAN'
    /**
     * Total items obtained in the collection
     */
    uniqueObtained: number
    /**
     * Total possible items in the collection
     */
    uniqueItems: number
    /**
     * The total number of pets obtained
     */
    petCount: number
    /**
     * Number of items obtained at the last checkpoint
     */
    lastCheckpointUniqueObtained: number
}
