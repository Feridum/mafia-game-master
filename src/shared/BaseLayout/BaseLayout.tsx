import React, { FC } from 'react'
import { useStyles } from './BaseLayout.styles'
import { AppBar, Toolbar } from '@material-ui/core'
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
