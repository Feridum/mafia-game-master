import { createStore } from 'easy-peasy'
import { StoreModel } from './store.types'

const storeModel: StoreModel = {}

export const store = createStore(storeModel)
