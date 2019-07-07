import React, { FC, useContext } from 'react'
import { PlayerProps } from './player.types'
import { usePlayerStyles } from './player.styles'
import { Typography, Button } from '@material-ui/core'
import { __RouterContext } from 'react-router'

export const Player: FC<PlayerProps> = ({ player }) => {
    const classes = usePlayerStyles()
    const router = useContext(__RouterContext)

    return (
        <Button
            classes={{ root: classes.container }}
            onClick={() =>
                router.history.push(`/fractions/players/${player.id}`)
            }
            variant="outlined"
            fullWidth
        >
            <Typography variant="h6" component="h6">
                {player.name}
            </Typography>
            {player.role && (
                <Typography variant="h6" component="h6">
                    ({player.role})
                </Typography>
            )}
        </Button>
    )
}
