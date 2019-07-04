import { action } from 'easy-peasy'
import { FractionModel } from './fraction.types'

export const fractionModel: FractionModel = {
    town: [],
    mafia: [],
    syndicate: [],
    addTownItem: action((state, payload) => {
        state.town.push(payload)
    }),
    addMafiaItem: action((state, payload) => {
        state.mafia.push(payload)
    }),
    addSyndicateItem: action((state, payload) => {
        state.syndicate.push(payload)
    }),
}
