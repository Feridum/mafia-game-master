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
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'flex-end',
    },
}))
