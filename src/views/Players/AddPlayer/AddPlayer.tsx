import React, { FC, useContext } from 'react'
import { BaseLayout } from 'shared/BaseLayout/BaseLayout'
import { useStoreActions } from 'store/store'
import { __RouterContext } from 'react-router'
import { PlayerForm } from '../PlayerForm/PlayerForm'

export const AddPlayer: FC = () => {
    const router = useContext(__RouterContext)
    const addPlayer = useStoreActions(actions => actions.player.addPlayer)

    const handleSubmit = (values: { name: string }) => {
        addPlayer(values.name)
        router.history.goBack()
    }
    return (
        <BaseLayout displayAppBar>
            <PlayerForm initialValue="" handleSubmit={handleSubmit} />
        </BaseLayout>
    )
}
