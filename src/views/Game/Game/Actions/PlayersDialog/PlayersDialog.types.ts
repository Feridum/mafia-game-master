import { GamePlayer } from 'store/game/game.types'

export interface PlayersDialogProps {
    open: boolean
    onClose: () => void
    onClick: (playersIds: string[], spyInfo: string) => void
    isSpy: boolean
}
