import React, { FC, useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { BaseLayout } from 'shared/BaseLayout/BaseLayout'
import { AppBar, Tabs, Tab, useTheme, Typography } from '@material-ui/core'
import { Phone, LocationCity, Brightness3 } from '@material-ui/icons'
import { useGameStyles } from './Game.styles'
import { useStoreState } from 'store/store'
import { Player } from './Player/Player'
import { Actions } from './Actions/Actions'

export const Game: FC = () => {
    const classes = useGameStyles()
    const theme = useTheme()
    const [value, setValue] = useState(1)
    const players = useStoreState(store => store.game.players)
    const logs = useStoreState(store => store.game.log)

    function handleChange(event: any, newValue: number) {
        setValue(newValue)
    }

    function handleChangeIndex(index: number) {
        setValue(index)
    }

    return (
        <BaseLayout>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                >
                    <Tab
                        icon={<LocationCity />}
                        classes={{ fullWidth: classes.fullWidth }}
                    />
                    <Tab
                        icon={<Brightness3 />}
                        classes={{ fullWidth: classes.fullWidth }}
                    />
                    <Tab
                        icon={<Phone />}
                        classes={{ fullWidth: classes.fullWidth }}
                    />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
                className={classes.flexGrow}
                slideClassName={classes.flexGrow}
                containerStyle={{
                    flexGrow: 1,
                    display: 'flex',
                }}
            >
                <div dir={theme.direction} className={classes.flexGrow}>
                    Logs
                </div>
                <div dir={theme.direction} className={classes.flexGrow}>
                    <Actions />
                </div>
                <div
                    dir={theme.direction}
                    className={classes.scrollableContainer}
                >
                    {players.map(player => (
                        <Player player={player} />
                    ))}
                </div>
            </SwipeableViews>
        </BaseLayout>
    )
}
