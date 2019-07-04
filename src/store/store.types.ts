import { PlayerModel } from './player/player.types'
import { FractionModel } from './fraction/fraction.types'

export interface StoreModel {
    player: PlayerModel
    fraction: FractionModel
}
