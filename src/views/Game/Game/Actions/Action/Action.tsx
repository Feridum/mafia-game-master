import React, { FC, useState, Fragment } from 'react'
import { Button } from '@material-ui/core'
import { ActionProps } from './Action.types'
import { PlayersDialog } from '../PlayersDialog/PlayersDialog'
import { useStoreActions } from 'store/store'
import {
    DayActions,
    ModifiersTypes,
    NightActions,
    FirstNightActions,
} from 'store/game/game.types'
import { useActionStyles } from './Action.styles'

export const Action: FC<ActionProps> = ({ action }) => {
    const [done, setDoneStatus] = useState(false)
    const [playerAction, setPlayerAction] = useState<{
        action: (players: string[], spyInfo: string) => void
        isSpy: boolean
    }>({ action: () => {}, isSpy: false })
    const [isPlayersDialogOpen, setPlayerDialog] = useState(false)
    const applyModifier = useStoreActions(actions => actions.game.applyModifier)
    const classes = useActionStyles()

    const mapActionsToModifer: {
        [key in string]: (players: string[], spyInfo: string) => void
    } = {
        [DayActions.KILL]: (players: string[]) =>
            applyModifier({ players, modifier: ModifiersTypes.DEATH }),
        [DayActions.MEET]: (players: string[], spyInfo: string) =>
            applyModifier({ players, modifier: ModifiersTypes.SPY, spyInfo }),
        [DayActions.CRAZY]: (players: string[]) =>
            applyModifier({ players, modifier: ModifiersTypes.CRAZY }),
        [DayActions.QUICK]: (players: string[]) =>
            applyModifier({ players, modifier: ModifiersTypes.QUICK }),
        [NightActions.MAFIA_KILL]: (players: string[]) =>
            applyModifier({ players, modifier: ModifiersTypes.DEATH }),
        [NightActions.DEATH_ANGEL]: (players: string[]) =>
            applyModifier({ players, modifier: ModifiersTypes.DEATH_ANGEL }),
        [NightActions.DEVIL]: (players: string[]) =>
            applyModifier({ players, modifier: ModifiersTypes.DEVIL }),
        [NightActions.DOCTOR]: (players: string[]) =>
            applyModifier({ players, modifier: ModifiersTypes.DOCTOR }),
        [NightActions.POISON]: (players: string[]) =>
            applyModifier({ players, modifier: ModifiersTypes.POISON }),
        [NightActions.SPY]: (players: string[], spyInfo: string) =>
            applyModifier({ players, modifier: ModifiersTypes.SPY, spyInfo }),
        [NightActions.SPY2]: (players: string[], spyInfo: string) =>
            applyModifier({ players, modifier: ModifiersTypes.SPY, spyInfo }),
        [FirstNightActions.BLACKMAIL]: (players: string[]) =>
            applyModifier({ players, modifier: ModifiersTypes.BLACKMAIL }),
    }

    const spyActions: string[] = [
        NightActions.SPY,
        NightActions.SPY2,
        DayActions.MEET,
    ]

    const handleClick = () => {
        setDoneStatus(true)

        if (action.action) {
            setPlayerAction({
                action: mapActionsToModifer[action.type],
                isSpy: spyActions.includes(action.type),
            })
            setPlayerDialog(true)
        }
    }
    return (
        <Fragment>
            <Button
                fullWidth
                variant={
                    done ? 'contained' : action.action ? 'outlined' : 'text'
                }
                onClick={handleClick}
                className={classes.container}
            >
                {action.message}
            </Button>
            {isPlayersDialogOpen && (
                <PlayersDialog
                    open={isPlayersDialogOpen}
                    onClose={() => setPlayerDialog(false)}
                    onClick={playerAction.action}
                    isSpy={playerAction.isSpy}
                />
            )}
        </Fragment>
    )
}
