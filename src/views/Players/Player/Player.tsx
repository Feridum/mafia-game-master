import React, { FC, useContext } from 'react'
import { PlayerProps } from './player.types'
import { usePlayerStyles } from './player.styles'
import { Button, Switch, Box } from '@material-ui/core'
import { __RouterContext } from 'react-router'
import { useStoreActions } from 'store/store'

export const Player: FC<PlayerProps> = ({ player }) => {
    const classes = usePlayerStyles()
    const router = useContext(__RouterContext)
    const changeStatus = useStoreActions(
        actions => actions.player.changePlayerStatus
    )

    return (
        <Box className={classes.container}>
            <Button
                classes={{ root: classes.button }}
                variant="outlined"
                onClick={() => router.history.push(`/players/${player.id}`)}
            >
                {player.name}
            </Button>
            <Switch
                checked={player.active}
                onChange={() => changeStatus(player.id)}
            />
        </Box>
    )
}
