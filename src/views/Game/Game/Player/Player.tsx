import React, { FC, Fragment } from 'react'
import { PlayerProps } from './player.types'
import { usePlayerStyles } from './player.styles'
import { Typography, Button } from '@material-ui/core'

export const Player: FC<PlayerProps> = ({ player }) => {
    const classes = usePlayerStyles()
    const modifiers = player.modifiers
    return (
        <Fragment>
            <Button
                classes={{ root: classes.container }}
                disabled={player.modifiers.death}
            >
                <Typography variant="h6" component="h6">
                    {player.name}
                </Typography>
                <Typography variant="h6" component="h6">
                    ({player.role})
                </Typography>
            </Button>
            <div className={classes.info}>
                <Typography
                    variant="h6"
                    component="h6"
                    className={classes.infoElem}
                >
                    T: {modifiers.poison}
                </Typography>
                <Typography
                    variant="h6"
                    component="h6"
                    className={classes.infoElem}
                >
                    A: {modifiers.deathAngel}
                </Typography>
                {modifiers.blackmail && (
                    <Typography
                        variant="h6"
                        component="h6"
                        className={classes.infoElem}
                    >
                        Szantażowany
                    </Typography>
                )}
            </div>
        </Fragment>
    )
}
