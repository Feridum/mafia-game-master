import React, { FC, useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { BaseLayout } from 'shared/BaseLayout/BaseLayout'
import { AppBar, Tabs, Tab, useTheme } from '@material-ui/core'
import { Phone, LocationCity, Brightness3 } from '@material-ui/icons'
import { useFractionStyles } from './Fraction.styles'
import {
    TownRoles,
    MafiaRoles,
    SyndicateRoles,
} from 'store/fraction/fraction.types'
import { Role } from './Role/Role'

export const Fraction: FC = () => {
    const classes = useFractionStyles()
    const theme = useTheme()
    const [value, setValue] = useState(0)

    function handleChange(event: any, newValue: number) {
        setValue(newValue)
    }

    function handleChangeIndex(index: number) {
        setValue(index)
    }

    console.log(TownRoles, TownRoles)
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
            >
                <div dir={theme.direction}>
                    {Object.keys(TownRoles).map((role, index) => (
                        <Role
                            roleKey={role}
                            roleValue={Object.values(TownRoles)[index]}
                            type="town"
                        />
                    ))}
                </div>
                <div dir={theme.direction}>
                    {Object.keys(MafiaRoles).map((role, index) => (
                        <Role
                            roleKey={role}
                            roleValue={Object.values(MafiaRoles)[index]}
                            type="mafia"
                        />
                    ))}
                </div>
                <div dir={theme.direction}>
                    {Object.keys(SyndicateRoles).map((role, index) => (
                        <Role
                            roleKey={role}
                            roleValue={Object.values(SyndicateRoles)[index]}
                            type="syndicate"
                        />
                    ))}
                </div>
            </SwipeableViews>
        </BaseLayout>
    )
}
