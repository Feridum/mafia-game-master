import React, { FC, useContext } from 'react'
import { BaseLayout } from 'shared/BaseLayout/BaseLayout'
import { Fab, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { usePlayersStyles } from './Players.styles'
import { __RouterContext } from 'react-router'
import { Routes } from 'routing/routes'
import { useStoreState } from 'store/store'
import { Player } from './Player/Player'
import { PlayersProps } from './Players.types'

export const Players: FC<PlayersProps> = () => {
    const players = useStoreState(store => store.player.items)
    const classes = usePlayersStyles()
    const router = useContext(__RouterContext)

    return (
        <BaseLayout displayAppBar>
            <div className={classes.legend}>
                <Typography variant="h6" component="h6">
                    Imie gracza
                </Typography>
                <Typography variant="h6" component="h6">
                    Czy gra?
                </Typography>
            </div>
            <div className={classes.container}>
                {players.map(player => (
                    <Player player={player} />
                ))}
            </div>
            <div className={classes.addContainer}>
                <Fab
                    color="secondary"
                    aria-label="Add"
                    onClick={() => router.history.push(Routes.ADD_PLAYER)}
                >
                    <Add />
                </Fab>
            </div>
        </BaseLayout>
    )
}
