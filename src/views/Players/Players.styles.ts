import { makeStyles } from '@material-ui/core'

export const usePlayersStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: 0,
        overflowY: 'scroll',
        flexGrow: 1,
        '&::-webkit-scrollbar': {
            width: '0 !important',
        },
    },
    addContainer: {
        position: 'fixed',
        bottom: 0,
        height: 100,
        backgroundColor: '#fff',
    },
}))

export const usePlayerStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(2),
    },
}))
