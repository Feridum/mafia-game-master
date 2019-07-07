import React, { FC, useContext } from 'react'
import { PlayerProps } from './player.types'
import { usePlayerStyles } from './player.styles'
import { Paper, Typography, Button } from '@material-ui/core'
import { __RouterContext } from 'react-router'

export const Player: FC<PlayerProps> = ({ player }) => {
    const classes = usePlayerStyles()

    return (
        <Button
            classes={{ root: classes.container }}
            disabled={player.modifiers.death}
        >
            <Typography variant="h5" component="h5">
                {player.name} ({player.role})
            </Typography>
            }
        </Button>
    )
}
