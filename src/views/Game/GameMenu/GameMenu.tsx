import React, { FC, useContext } from 'react'
import { BaseLayout } from 'shared/BaseLayout/BaseLayout'
import { Button } from '@material-ui/core'
import { useGameMenuStyles } from './GameMenu.styles'
import { __RouterContext } from 'react-router'
import { Routes } from 'routing/routes'
import { useStoreState, useStoreActions } from 'store/store'

export const GameMenu: FC = () => {
    const classes = useGameMenuStyles()
    const router = useContext(__RouterContext)
    const players = useStoreState(store => store.player.items)
    const startNewGame = useStoreActions(actions => actions.game.startGame)
    const existingGame = useStoreState(store => store.game.exisitingGame)

    const handleNewGame = () => {
        startNewGame({ players })
        router.history.push(Routes.GAME)
    }
    return (
        <BaseLayout>
            <Button
                variant="outlined"
                color="primary"
                classes={{ root: classes.button }}
                onClick={handleNewGame}
            >
                Zacznij nową grę
            </Button>
            <Button
                variant="outlined"
                color="primary"
                classes={{ root: classes.button }}
                onClick={() => router.history.push(Routes.GAME)}
                disabled={!existingGame}
            >
                Kontynuuj
            </Button>
        </BaseLayout>
    )
}
