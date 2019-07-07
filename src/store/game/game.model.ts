import {
    GameModel,
    GamePeriodsType,
    FirstNightActions,
    DayActions,
    GamePlayer,
    ModifiersTypes,
    Modifiers,
    NightActions,
} from './game.types'
import { action, computed } from 'easy-peasy'
import { Fractions, TownRoles, SyndicateRoles } from 'store/player/player.types'
import { uniq } from 'lodash'

const mapNewModifiers = (
    player: GamePlayer,
    modifier: ModifiersTypes,
    spyInfo?: string
): Modifiers => {
    const modifiers: { [key in ModifiersTypes]: Modifiers } = {
        [ModifiersTypes.POISON]: {
            ...player.modifiers,
            poison: player.modifiers.poison + 1,
            death: player.modifiers.poison ? true : false,
        },
        [ModifiersTypes.BLACKMAIL]: {
            ...player.modifiers,
            blackmail: true,
        },
        [ModifiersTypes.DEATH_ANGEL]: {
            ...player.modifiers,
            deathAngel: player.modifiers.deathAngel + 1,
            death: player.modifiers.deathAngel ? true : false,
        },
        [ModifiersTypes.DEVIL]: {
            ...player.modifiers,
        },
        [ModifiersTypes.DOCTOR]: {
            ...player.modifiers,
            poison: 0,
            death: true,
        },
        [ModifiersTypes.SPY]: {
            ...player.modifiers,
            spy: spyInfo
                ? [...player.modifiers.spy, spyInfo]
                : player.modifiers.spy,
        },
        [ModifiersTypes.CRAZY]: {
            ...player.modifiers,
            death: true,
        },
        [ModifiersTypes.QUICK]: {
            ...player.modifiers,
            death: true,
        },
        [ModifiersTypes.DEATH]: {
            ...player.modifiers,
            death: true,
        },
    }

    return modifiers[modifier]
}

export const gameModel: GameModel = {
    exisitingGame: false,
    periodNumber: 0,
    config: {
        firstNight: {
            actions: [
                {
                    type: FirstNightActions.MAFIA_MEET,
                    message: 'Mafia się poznaje',
                    action: false,
                },
                {
                    type: FirstNightActions.BLACKMAIL,
                    message: 'Szantażysta wybiera ofiarę',
                    action: true,
                },
                {
                    type: FirstNightActions.PROSTITUTE_MEET,
                    message: 'Prostytutka omamia ofiarę, który wyjawi wszystko',
                    action: false,
                },
            ],
        },
        day: {
            actions: [
                {
                    type: DayActions.KILL,
                    message: 'Miasto postanowiło zabić',
                    action: true,
                },
                {
                    type: DayActions.MEET,
                    message: 'Miasto chce poznać mieszkańca',
                    action: true,
                },
                {
                    type: DayActions.CRAZY,
                    message: 'Szaleniec postanowił zabić',
                    action: true,
                },
                {
                    type: DayActions.QUICK,
                    message: 'Szybki nie chce dać się zabić',
                    action: true,
                },
            ],
        },
        night: {
            actions: [
                {
                    type: NightActions.MAFIA_KILL,
                    message: 'Mafia zabija',
                    action: true,
                },
                {
                    type: NightActions.POISON,
                    message: 'Truciel zatruwa osobę',
                    action: true,
                },
                {
                    type: NightActions.DEATH_ANGEL,
                    message: 'Anioł śmierci naznacza',
                    action: true,
                },
                {
                    type: NightActions.DOCTOR,
                    message: 'Lekarz leczy',
                    action: true,
                },
                {
                    type: NightActions.DEVIL,
                    message: 'Diabolica rozpoczyna seans spirytystyczny',
                    action: true,
                },
                {
                    type: NightActions.SPY,
                    message: 'Szpiego poznaje tożsamość gracza',
                    action: true,
                },
                {
                    type: NightActions.SPY2,
                    message: 'Szpieg v2 poznaje tożsamość gracza',
                    action: true,
                },
            ],
        },
    },
    players: [],
    log: [],
    period: computed(state =>
        !!(state.periodNumber % 2) ? GamePeriodsType.DAY : GamePeriodsType.NIGHT
    ),
    roles: computed(state =>
        state.players
            .filter(player => !player.modifiers.death)
            .map(player => player.role)
    ),
    fractions: computed(state =>
        uniq(
            state.players
                .filter(player => !player.modifiers.death)
                .map(player => player.fraction)
        )
    ),
    applyModifier: action((state, payload) => {
        state.players = state.players.map<GamePlayer>(player => {
            if (payload.players.includes(player.playerId)) {
                return {
                    ...player,
                    role:
                        payload.modifier === ModifiersTypes.DEVIL &&
                        player.modifiers.death
                            ? SyndicateRoles.NONE
                            : player.role,
                    fraction:
                        payload.modifier === ModifiersTypes.DEVIL &&
                        player.modifiers.death
                            ? Fractions.SYNDICATE
                            : player.fraction,
                    modifiers: mapNewModifiers(
                        player,
                        payload.modifier,
                        payload.spyInfo
                    ),
                }
            }

            if (
                payload.modifier === ModifiersTypes.CRAZY &&
                player.role === TownRoles.CRAZY
            ) {
                return {
                    ...player,
                    role: TownRoles.NONE,
                }
            }
            if (
                payload.modifier === ModifiersTypes.QUICK &&
                player.role === TownRoles.QUICK
            ) {
                return {
                    ...player,
                    role: TownRoles.NONE,
                }
            }
            return player
        })
    }),
    startGame: action((state, payload) => {
        state.exisitingGame = true
        state.periodNumber = 0
        state.players = payload.players.map<GamePlayer>(player => {
            return {
                playerId: player.id,
                name: player.name,
                role: player.role as string,
                fraction: player.fraction as Fractions,
                modifiers: {
                    poison: 0,
                    death: false,
                    blackmail: false,
                    deathAngel: 0,
                    spy: [],
                },
            }
        })
    }),
    nextPeriod: action(state => {
        state.periodNumber = state.periodNumber + 1
    }),
    previousPeriod: action(state => {
        state.periodNumber = state.periodNumber - 1
    }),
}
