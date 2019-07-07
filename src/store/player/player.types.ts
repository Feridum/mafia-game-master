import { Action } from 'easy-peasy'

export enum Fractions {
    TOWN = 'Miasto',
    MAFIA = 'Mafia',
    SYNDICATE = 'Syndyk',
}

export enum TownRoles {
    SPY = 'Szpieg',
    SPY2 = 'Szpieg 2.0',
    CRAZY = 'Szaleniec',
    QUICK = 'Szybki',
    DOCTOR = 'Doktor',
    NONE = 'Zwykły Obywatel',
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
    NONE = 'szeregowy Syndykatu',
}

export type Roles = TownRoles & MafiaRoles & SyndicateRoles

export interface PlayerModel {
    items: Player[]
    addPlayer: Action<PlayerModel, string>
    assignToRole: Action<
        PlayerModel,
        { playerId: string; role: string; fraction: Fractions }
    >
}

export interface Player {
    id: string
    name: string
    active: boolean
    role: string | null
    fraction: Fractions | null
}
