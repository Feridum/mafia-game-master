import React, { Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { StoreProvider } from 'easy-peasy'
import { store, persistor } from './store/store'
import { Routing } from 'routing/Routing'
import { Container } from '@material-ui/core'
import { PersistGate } from 'redux-persist/integration/react'

const App: React.FC = () => {
    return (
        <Fragment>
            <PersistGate loading={<div>Loading</div>} persistor={persistor}>
                <StoreProvider store={store}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Routing />
                    </Container>
                </StoreProvider>
            </PersistGate>
        </Fragment>
    )
}

export default App
