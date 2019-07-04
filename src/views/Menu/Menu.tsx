import React, { FC, useContext } from 'react'
import { BaseLayout } from 'shared/BaseLayout/BaseLayout'
import { Button } from '@material-ui/core'
import { useMenuStyles } from './Menu.styles'
import { __RouterContext } from 'react-router'
import { Routes } from 'routing/routes'

export const Menu: FC = () => {
    const classes = useMenuStyles()
    const router = useContext(__RouterContext)

    return (
        <BaseLayout>
            <Button
                variant="outlined"
                color="primary"
                classes={{ root: classes.button }}
                onClick={() => router.history.push(Routes.PLAYERS)}
            >
                Gracze
            </Button>
            <Button
                variant="outlined"
                color="primary"
                classes={{ root: classes.button }}
                onClick={() => router.history.push(Routes.ASSIGN_PLAYERS)}
            >
                Przypisz role
            </Button>
            <Button
                variant="outlined"
                color="primary"
                classes={{ root: classes.button }}
            >
                Zacznij gre
            </Button>
        </BaseLayout>
    )
}
