import React, { FC } from 'react'
import { BaseLayout } from 'shared/BaseLayout/BaseLayout'
import { useStoreState } from 'store/store'
import { Player } from './Player/Player'

export const Assign: FC = () => {
    const players = useStoreState(store => store.player.items)
    return (
        <BaseLayout>
            <div>
                {players.map(player => (
                    <Player player={player} />
                ))}
            </div>
        </BaseLayout>
    )
}
