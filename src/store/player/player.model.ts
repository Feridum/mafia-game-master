import { PlayerModel, Player } from './player.types'
import { action } from 'easy-peasy'
import uuid from 'uuid/v4'

export const playerModel: PlayerModel = {
    items: [],
    addPlayer: action((state, payload) => {
        state.items.push({
            id: uuid(),
            active: true,
            name: payload,
            fraction: null,
            role: null,
        })
    }),
    assignToRole: action((state, payload) => {
        state.items = state.items.map<Player>(player => {
            if (player.id === payload.playerId) {
                return {
                    ...player,
                    fraction: payload.fraction,
                    role: payload.role,
                }
            }

            if (player.role === payload.role) {
                return {
                    ...player,
                    fraction: null,
                    role: null,
                }
            }
            return player
        })
    }),
    editPlayer: action((state, payload) => {
        state.items = state.items.map(player => {
            if (player.id === payload.id) {
                return {
                    ...player,
                    name: payload.name,
                }
            }

            return player
        })
    }),
    changePlayerStatus: action((state, payload) => {
        state.items = state.items.map(player => {
            if (player.id === payload) {
                return {
                    ...player,
                    active: !player.active,
                }
            }

            return player
        })
    }),
}
