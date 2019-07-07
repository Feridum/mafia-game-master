import React, { FC } from 'react'
import { Switch, Route, HashRouter as Router } from 'react-router-dom'
import { Menu } from 'views/Menu/Menu'
import { Players } from 'views/Players/Players'
import { Routes } from './routes'
import { AddPlayer } from 'views/Players/AddPlayer/AddPlayer'
import { Assign } from 'views/Assign/Assign'
import { Fraction } from 'views/Assign/Fraction/Fraction'
import { Game } from 'views/Game/Game/Game'
import { GameMenu } from 'views/Game/GameMenu/GameMenu'
import { EditPlayer } from 'views/Players/EditPlayer/EditPlayer'

export const Routing: FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={Routes.MAIN_MENU} component={Menu} />
                <Route exact path={Routes.PLAYERS} component={Players} />
                <Route exact path={Routes.ADD_PLAYER} component={AddPlayer} />
                <Route exact path={Routes.ASSIGN_PLAYERS} component={Assign} />
                <Route exact path={Routes.GAME} component={Game} />
                <Route exact path={Routes.GAME_MENU} component={GameMenu} />
                <Route exact path={'/players/:id'} component={EditPlayer} />
                <Route
                    exact
                    path={'/fractions/players/:id'}
                    component={Fraction}
                />
            </Switch>
        </Router>
    )
}
