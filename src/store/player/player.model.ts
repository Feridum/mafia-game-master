import { PlayerModel } from './player.types'
import { action } from 'easy-peasy'
import uuid from 'uuid/v4'

export const playerModel: PlayerModel = {
    items: [],
    addPlayer: action((state, payload) => {
        state.items.push({
            id: uuid(),
            active: true,
            name: payload,
        })
    }),
}
