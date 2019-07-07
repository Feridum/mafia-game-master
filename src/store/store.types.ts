import { PlayerModel } from './player/player.types'

import { GameModel } from './game/game.types'

export interface StoreModel {
    player: PlayerModel
    game: GameModel
}
