import React, { FC, useContext } from 'react'
import { Paper, Typography } from '@material-ui/core'
import { __RouterContext } from 'react-router'
import { useRoleStyles } from './Role.styles'
import { RoleProps } from './Role.types'
import { useStoreActions } from 'store/store'

export const Role: FC<RoleProps> = ({ roleValue, roleKey, type }) => {
    const classes = useRoleStyles()
    const router = useContext(__RouterContext)

    const addRole = useStoreActions(actions => {
        const mapValuesToAction = {
            town: actions.fraction.addTownItem,
            mafia: actions.fraction.addMafiaItem,
            syndicate: actions.fraction.addSyndicateItem,
        }
        return mapValuesToAction[type]
    })

    const id = (router.match.params as { id: string }).id

    const handleClick = () => {
        id &&
            addRole({
                type: roleKey,
                playerId: id,
            })
    }

    return (
        <Paper classes={{ root: classes.container }} onClick={handleClick}>
            <Typography variant="h5" component="h3">
                {roleValue}
            </Typography>
        </Paper>
    )
}
