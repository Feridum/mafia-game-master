import React, { FC, useContext } from 'react'
import { BaseLayout } from 'shared/BaseLayout/BaseLayout'
import { useStoreActions, useStoreState } from 'store/store'
import { __RouterContext } from 'react-router'
import { PlayerForm } from '../PlayerForm/PlayerForm'

export const EditPlayer: FC = () => {
    const router = useContext(__RouterContext)
    const editPlayer = useStoreActions(actions => actions.player.editPlayer)
    const id = (router.match.params as { id: string }).id
    const player = useStoreState(store => store.player.items).filter(
        player => player.id === id
    )[0]

    const handleSubmit = (values: { name: string }) => {
        editPlayer({ id: id, name: values.name })
        router.history.goBack()
    }
    return (
        <BaseLayout displayAppBar>
            <PlayerForm
                initialValue={player.name}
                handleSubmit={handleSubmit}
            />
        </BaseLayout>
    )
}
