import React, { FC } from 'react'
import { BaseLayout } from 'shared/BaseLayout/BaseLayout'
import { useStoreState } from 'store/store'
import { Player } from './Player/Player'
import { useAssignStyles } from './Assign.styles'

export const Assign: FC = () => {
    const players = useStoreState(store => store.player.items).filter(
        player => player.active
    )
    const classes = useAssignStyles()

    return (
        <BaseLayout displayAppBar>
            <div className={classes.container}>
                {players.map(player => (
                    <Player player={player} />
                ))}
            </div>
        </BaseLayout>
    )
}
