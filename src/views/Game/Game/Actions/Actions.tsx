import React, { FC, Fragment } from 'react'
import { Button, Box, ButtonGroup } from '@material-ui/core'
import { useActionStyles } from './Actions.styles'
import { useStoreState, useStoreActions } from 'store/store'
import {
    GamePeriodsType,
    DayActions,
    FirstNightActions,
    NightActions,
} from 'store/game/game.types'
import { Action } from './Action/Action'
import {
    TownRoles,
    SyndicateRoles,
    MafiaRoles,
    Fractions,
} from 'store/player/player.types'

export const Actions: FC = () => {
    const classes = useActionStyles()
    const period = useStoreState(state => state.game.period)
    const periodNumber = useStoreState(state => state.game.periodNumber)
    const firstNightActions = useStoreState(
        state => state.game.config.firstNight.actions
    )
    const dayActions = useStoreState(state => state.game.config.day.actions)
    const nightActions = useStoreState(state => state.game.config.night.actions)
    const nextPeriod = useStoreActions(state => state.game.nextPeriod)
    const previousPeriod = useStoreActions(state => state.game.previousPeriod)
    const roles = useStoreState(state => state.game.roles)
    const fractions = useStoreState(state => state.game.fractions)
    let actions = null

    if (periodNumber === 0) {
        actions = firstNightActions.filter(action => {
            if (action.type === FirstNightActions.PROSTITUTE_MEET) {
                return roles.includes(SyndicateRoles.PROSTITUTE)
            }
            if (action.type === FirstNightActions.BLACKMAIL) {
                return roles.includes(MafiaRoles.BLACKMAILER)
            }
            return true
        })
    } else if (period === GamePeriodsType.DAY) {
        actions = dayActions.filter(action => {
            if (action.type === DayActions.QUICK) {
                return roles.includes(TownRoles.QUICK)
            }
            if (action.type === DayActions.CRAZY) {
                return roles.includes(TownRoles.CRAZY)
            }
            return true
        })
    } else if (period === GamePeriodsType.NIGHT) {
        actions = nightActions.filter(action => {
            if (action.type === NightActions.DEATH_ANGEL) {
                return roles.includes(SyndicateRoles.DEATH_ANGEL)
            }
            if (action.type === NightActions.DEVIL) {
                return roles.includes(SyndicateRoles.DEVIL)
            }
            if (action.type === NightActions.DOCTOR) {
                return roles.includes(TownRoles.DOCTOR)
            }
            if (action.type === NightActions.POISON) {
                return roles.includes(MafiaRoles.POISON)
            }
            if (action.type === NightActions.SPY) {
                return roles.includes(TownRoles.SPY)
            }
            if (action.type === NightActions.SPY2) {
                return roles.includes(TownRoles.SPY2)
            }
            if (action.type === NightActions.MAFIA_KILL) {
                return fractions.includes(Fractions.MAFIA)
            }

            return true
        })
    }

    return (
        <Fragment>
            <Box className={classes.container} key={period}>
                {actions && actions.map(action => <Action action={action} />)}
            </Box>
            <ButtonGroup fullWidth>
                {periodNumber > 0 && (
                    <Button
                        onClick={() => previousPeriod()}
                        className={classes.button}
                    >
                        Wróć
                    </Button>
                )}
                <Button onClick={() => nextPeriod()} className={classes.button}>
                    Dalej
                </Button>
            </ButtonGroup>
        </Fragment>
    )
}
