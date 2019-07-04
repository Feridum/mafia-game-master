import React, { FC } from 'react'
import { PlayerProps } from './player.types'
import { usePlayerStyles } from './player.styles'
import { Paper, Typography } from '@material-ui/core'

export const Player: FC<PlayerProps> = ({ player }) => {
    const classes = usePlayerStyles()
    return (
        <Paper classes={{ root: classes.container }}>
            <Typography variant="h5" component="h3">
                Olek
            </Typography>
        </Paper>
    )
}
