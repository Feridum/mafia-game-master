import { Action } from 'easy-peasy'

export enum Fractions {
    TOWN = 'Miasto',
    MAFIA = 'Mafia',
    SYNDICATE = 'Syndyk',
}

export enum TownRoles {
    SPY = 'Szpieg',
    CRAZY = 'Szaleniec',
    QUICK = 'Szybki',
    DOCTOR = 'Doktor',
}

export enum MafiaRoles {
    BOSS = 'Boss',
    BLACKMAILER = 'Szantażysta',
    POISON = 'Truciciel',
}

export enum SyndicateRoles {
    DEVIL = 'Diabolica',
    DEATH_ANGEL = 'Anioł Śmierci',
    PROSTITUTE = 'Prostytuta',
    SAINT = 'Święty',
}

export interface FractionModel {
    town: FractionItem[]
    mafia: FractionItem[]
    syndicate: FractionItem[]
    addTownItem: Action<FractionModel, FractionItem>
    addMafiaItem: Action<FractionModel, FractionItem>
    addSyndicateItem: Action<FractionModel, FractionItem>
}

export interface FractionItem {
    type: string
    playerId: string
}
