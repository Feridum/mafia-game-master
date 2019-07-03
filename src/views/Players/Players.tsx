import React, { Fragment, FC, useContext } from 'react'
import { BaseLayout } from 'shared/BaseLayout/BaseLayout'
import {
    Box,
    Typography,
    Paper,
    AppBar,
    Button,
    Toolbar,
    Fab,
    useScrollTrigger,
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { usePlayersStyles, usePlayerStyles } from './Players.styles'
import { __RouterContext } from 'react-router'
import { Routes } from 'routing/routes'

const Player: FC = () => {
    const classes = usePlayerStyles()
    return (
        <Paper classes={{ root: classes.container }}>
            <Typography variant="h5" component="h3">
                Olek
            </Typography>
        </Paper>
    )
}

export const Players: FC = () => {
    const classes = usePlayersStyles()
    const router = useContext(__RouterContext)

    return (
        <BaseLayout
            displayAppBar
            toolbar={
                <Fab
                    color="secondary"
                    aria-label="Add"
                    onClick={() => router.history.push(Routes.ADD_PLAYER)}
                >
                    <Add />
                </Fab>
            }
        >
            <div className={classes.container}>
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
            </div>
        </BaseLayout>
    )
}
