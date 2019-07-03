import React, { FC } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Menu } from 'views/Menu/Menu'
import { Players } from 'views/Players/Players'
import { Routes } from './routes'
import { AddPlayer } from 'views/Players/AddPlayer/AddPlayer'

export const Routing: FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={Routes.MAIN_MENU} component={Menu} />
                <Route exact path={Routes.PLAYERS} component={Players} />
                <Route exact path={Routes.ADD_PLAYER} component={AddPlayer} />
            </Switch>
        </Router>
    )
}
