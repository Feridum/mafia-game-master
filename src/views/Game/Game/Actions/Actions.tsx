import React, { FC, Fragment } from 'react'
import { Button, Box, ButtonGroup } from '@material-ui/core'
import { useActionStyles } from './Actions.styles'
import { useStoreState, useStoreActions } from 'store/store'
import { GamePeriodsType, DayActions } from 'store/game/game.types'
import { Action } from './Action/Action'
import { TownRoles } from 'store/player/player.types'

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
    let actions = null

    if (periodNumber === 0) {
        actions = firstNightActions
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
        actions = nightActions
    }

    return (
        <Fragment>
            <Box className={classes.container}>
                {actions && actions.map(action => <Action action={action} />)}
            </Box>
            <ButtonGroup fullWidth>
                {periodNumber > 0 && (
                    <Button onClick={() => previousPeriod()}>Wróć</Button>
                )}
                <Button onClick={() => nextPeriod()}>Następny</Button>
            </ButtonGroup>
        </Fragment>
    )
}
