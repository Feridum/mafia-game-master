import React, { FC } from 'react'
import { useStyles } from './BaseLayout.styles'
import { Typography, AppBar, Toolbar, Fab } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { BaseLayoutProps } from './BaseLayout.types'

export const BaseLayout: FC<BaseLayoutProps> = ({
    children,
    toolbar,
    displayAppBar = false,
}) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            {displayAppBar && (
                <AppBar position="static" color="default">
                    <Toolbar>{toolbar}</Toolbar>
                </AppBar>
            )}
            <div className={classes.childContainer}>{children}</div>
        </div>
    )
}
