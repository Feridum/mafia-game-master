import { Action, Computed } from 'easy-peasy'
import { Player } from 'store/player/player.types'

export enum GamePeriodsType {
    DAY = 'DAY',
    NIGHT = 'NIGHT',
}

export enum DayActions {
    KILL = 'KILL',
    MEET = 'MEET',
    QUICK = 'QUICK',
    CRAZY = 'CRAZY',
}

export enum FirstNightActions {
    PROSTITUTE_MEET = 'PROSTITUTE_MEET',
    MAFIA_MEET = 'MAFIA_MEET',
    BLACKMAIL = 'BLACKMAIL',
}

export enum NightActions {
    MAFIA_KILL = 'MAFIA_KILL',
    POISON = 'POISON',
    DEATH_ANGEL = 'DEATH_ANGEL',
    DOCTOR = 'DOCTOR',
    DEVIL = 'DEVIL',
    SPY = 'SPY',
    SPY2 = 'SPY2',
}

export type Actions = FirstNightActions | DayActions | NightActions

export interface ActionConfig {
    type: Actions
    message: string
    action: boolean
}
export interface Config {
    actions: Array<ActionConfig>
}

export enum ModifiersTypes {
    POISON = 'POISON',
    DEATH = 'DEATH',
    BLACKMAIL = 'BLACKMAIL',
    DEATH_ANGEL = 'DEATH_ANGEL',
    SPY = 'SPY',
    DOCTOR = 'DOCTOR',
    DEVIL = 'DEVIL',
    CRAZY = 'CRAZY',
    QUICK = 'QUICK',
}

export interface Modifiers {
    poison: number
    death: boolean
    blackmail: boolean
    deathAngel: number
    spy: string[]
}

export interface GamePlayer {
    playerId: string
    name: string
    fraction: string
    role: string
    modifiers: Modifiers
}

export interface GameModel {
    exisitingGame: boolean
    period: Computed<GameModel, GamePeriodsType>
    roles: Computed<GameModel, string[]>
    fractions: Computed<GameModel, string[]>
    periodNumber: number
    config: {
        firstNight: Config
        day: Config
        night: Config
    }
    players: GamePlayer[]
    log: Array<{
        action: string
    }>
    applyModifier: Action<
        GameModel,
        {
            players: string[]
            modifier: ModifiersTypes
            spyInfo?: string
            newRole?: string
        }
    >
    startGame: Action<GameModel, { players: Player[] }>
    nextPeriod: Action<GameModel>
    previousPeriod: Action<GameModel>
}
