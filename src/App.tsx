import React, { Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { StoreProvider } from 'easy-peasy'
import { store } from './store/store'
import { Routing } from 'routing/Routing'
import { Container } from '@material-ui/core'

const App: React.FC = () => {
    return (
        <Fragment>
            <StoreProvider store={store}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Routing />
                </Container>
            </StoreProvider>
        </Fragment>
    )
}

export default App
