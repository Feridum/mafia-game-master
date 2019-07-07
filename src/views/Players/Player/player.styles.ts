import { makeStyles } from '@material-ui/core'

export const usePlayerStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        display: 'flex',
        flexGrow: 1,
        padding: theme.spacing(2),
    },
}))
