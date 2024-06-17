import brainrot from '../assets/accountTypes/ultimate_ironman.webp'
import normie from '../assets/accountTypes/normal.webp'
import im from '../assets/accountTypes/ironman.webp'
import him from '../assets/accountTypes/hardcore_ironman.webp'
import gim from '../assets/accountTypes/group_ironman.webp'
import hgim from '../assets/accountTypes/hardcore_group_ironman.webp'
import ugim from '../assets/accountTypes/unranked_group_ironman.webp'

/**
 * Determine the account type image
 * @param {"NORMAL"|"IRONMAN"|"HARDCORE_IRONMAN"|"ULTIMATE_IRONMAN"|"GROUP_IRONMAN"|"HARDCORE_GROUP_IRONMAN"|"UNRANKED_GROUP_IRONMAN"} accountType - The account type
 */
export const determineAccountTypeImg = (accountType) => {
    switch (accountType) {
        case 'IRONMAN':
            return im
        case 'HARDCORE_IRONMAN':
            return him
        case 'ULTIMATE_IRONMAN':
            return brainrot
        case 'GROUP_IRONMAN':
            return gim
        case 'HARDCORE_GROUP_IRONMAN':
            return hgim
        case 'UNRANKED_GROUP_IRONMAN':
            return ugim
        case 'NORMAL':
        default:
            return normie
    }
}
