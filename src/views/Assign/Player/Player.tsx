import React, { FC, useContext } from 'react'
import { PlayerProps } from './player.types'
import { usePlayerStyles } from './player.styles'
import { Paper, Typography } from '@material-ui/core'
import { __RouterContext } from 'react-router'

export const Player: FC<PlayerProps> = ({ player }) => {
    const classes = usePlayerStyles()
    const router = useContext(__RouterContext)

    return (
        <Paper
            classes={{ root: classes.container }}
            onClick={() =>
                router.history.push(`/fractions/players/${player.id}`)
            }
        >
            <Typography variant="h5" component="h3">
                Olek
            </Typography>
        </Paper>
    )
}
