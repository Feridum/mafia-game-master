import React, { FC, useContext } from 'react'
import { useStyles } from './BaseLayout.styles'
import { AppBar } from '@material-ui/core'
import { BaseLayoutProps } from './BaseLayout.types'
import { ChevronLeft } from '@material-ui/icons'
import { __RouterContext } from 'react-router'

export const BaseLayout: FC<BaseLayoutProps> = ({
    children,
    displayAppBar = false,
}) => {
    const classes = useStyles()
    const router = useContext(__RouterContext)

    return (
        <div className={classes.container}>
            {displayAppBar && (
                <AppBar position="static" color="primary">
                    <ChevronLeft
                        onClick={() => router.history.goBack()}
                        style={{ fontSize: '2.5rem' }}
                    />
                </AppBar>
            )}
            <div className={classes.childContainer}>{children}</div>
        </div>
    )
}
