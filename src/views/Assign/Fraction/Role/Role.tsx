import React, { FC, useContext } from 'react'
import { Button, Typography } from '@material-ui/core'
import { __RouterContext } from 'react-router'
import { useRoleStyles } from './Role.styles'
import { RoleProps } from './Role.types'
import { useStoreActions } from 'store/store'

export const Role: FC<RoleProps> = ({ role, fraction }) => {
    const classes = useRoleStyles()
    const router = useContext(__RouterContext)

    const addRole = useStoreActions(actions => actions.player.assignToRole)

    const id = (router.match.params as { id: string }).id

    const handleClick = () => {
        id &&
            addRole({
                role: role,
                playerId: id,
                fraction: fraction,
            })

        router.history.goBack()
    }

    return (
        <Button
            classes={{ root: classes.container }}
            onClick={handleClick}
            variant="outlined"
            fullWidth
        >
            <Typography variant="h5" component="h3">
                {role}
            </Typography>
        </Button>
    )
}
