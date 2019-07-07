import { createStore } from 'easy-peasy'
import { StoreModel } from './store.types'
import { playerModel } from './player/player.model'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { gameModel } from './game/game.model'

const storeModel: StoreModel = {
    player: playerModel,
    game: gameModel,
}

const persistConfig = {
    key: 'root',
    storage,
}

export const store = createStore(storeModel, {
    reducerEnhancer: (reducer: any): any => {
        return persistReducer(persistConfig, reducer)
    },
})

export const persistor = persistStore(store)
export const useStoreActions = store.useStoreActions
export const useStoreDispatch = store.useStoreDispatch
export const useStoreState = store.useStoreState
