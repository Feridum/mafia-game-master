import { makeStyles } from '@material-ui/core'

export const useGameStyles = makeStyles(theme => ({
    fullWidth: {
        minWidth: 'unset',
    },
    flexGrow: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    logsContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        marginTop: theme.spacing(2),
    },
    scrollableContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 0,
        overflowY: 'scroll',
        flexGrow: 1,
        '&::-webkit-scrollbar': {
            width: '0 !important',
        },
    },
}))
