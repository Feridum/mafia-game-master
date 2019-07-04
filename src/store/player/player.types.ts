import { Action } from 'easy-peasy'

export interface PlayerModel {
    items: Player[]
    addPlayer: Action<PlayerModel, string>
}

export interface Player {
    id: string
    name: string
    active: boolean
}
