import React, { FC, useState, Fragment } from 'react'
import {
    Dialog,
    Button,
    DialogActions,
    DialogContent,
    Typography,
    ButtonGroup,
} from '@material-ui/core'
import { PlayersDialogProps } from './PlayersDialog.types'
import { useStoreState } from 'store/store'
import { GamePlayer } from 'store/game/game.types'
import { Fractions } from 'store/player/player.types'
import { usePlayersDialogStyles } from './PlayersDialog.styles'

const mapFractionsToInfo: { [key in string]: string } = {
    [Fractions.MAFIA]: 'Nie z mafii',
    [Fractions.SYNDICATE]: 'Nie z syndyku',
    [Fractions.TOWN]: 'Nie z miasta',
}

export const PlayersDialog: FC<PlayersDialogProps> = ({
    open,
    onClose,
    onClick,
    isSpy,
}) => {
    const [selectedPlayersIds, setSelectedPlayers] = useState<string[]>([])
    const [spyInfo, setSpyInfo] = useState<GamePlayer | null>(null)
    const players = useStoreState(store =>
        store.game.players.filter(player => !player.modifiers.death)
    )
    const classes = usePlayersDialogStyles()

    const handleClick = (player: GamePlayer) => {
        if (isSpy) {
            setSpyInfo(player)
        } else {
            if (selectedPlayersIds.includes(player.playerId)) {
                setSelectedPlayers(
                    selectedPlayersIds.filter(
                        playerId => playerId !== player.playerId
                    )
                )
            } else {
                setSelectedPlayers([...selectedPlayersIds, player.playerId])
            }
        }
    }

    const handleSave = () => {
        onClick(selectedPlayersIds, '')
        onClose()
    }

    const handleSpySave = (playerId: string, spy: string) => {
        onClick([playerId], spy)
        onClose()
    }

    return (
        <Dialog fullScreen open={open} onClose={onClose}>
            <DialogContent>
                {!!!spyInfo ? (
                    players.map(player => (
                        <Button
                            fullWidth
                            variant={
                                selectedPlayersIds.includes(player.playerId)
                                    ? 'contained'
                                    : 'outlined'
                            }
                            onClick={() => handleClick(player)}
                            className={classes.button}
                            key={`player-dialog-${player.playerId}`}
                        >
                            {player.name}
                        </Button>
                    ))
                ) : (
                    <Fragment>
                        <Typography variant="h5" component="h3">
                            {spyInfo!.name} {spyInfo!.fraction}
                        </Typography>
                        {spyInfo!.modifiers.spy.length === 0 && (
                            <Typography variant="h5" component="h3">
                                O tym graczu nie była jeszcze sprawdzona
                                informacja
                            </Typography>
                        )}
                        {spyInfo!.modifiers.spy.map(spy => (
                            <Typography variant="h5" component="h3">
                                {mapFractionsToInfo[spy]}
                            </Typography>
                        ))}
                        <ButtonGroup fullWidth>
                            {Object.values(Fractions)
                                .filter(
                                    fraction => fraction !== spyInfo!.fraction
                                )
                                .map(fraction => (
                                    <Button
                                        onClick={() =>
                                            handleSpySave(
                                                spyInfo!.playerId,
                                                fraction
                                            )
                                        }
                                        key={fraction}
                                    >
                                        {mapFractionsToInfo[fraction]}
                                    </Button>
                                ))}
                        </ButtonGroup>
                    </Fragment>
                )}
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={!!spyInfo ? () => setSpyInfo(null) : onClose}
                    color="primary"
                    className={classes.button}
                >
                    Anuluj
                </Button>
                {!isSpy && (
                    <Button
                        onClick={() => handleSave()}
                        color="primary"
                        disabled={selectedPlayersIds.length === 0}
                        className={classes.button}
                    >
                        Zatwierdź zmainy dla graczy
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    )
}
