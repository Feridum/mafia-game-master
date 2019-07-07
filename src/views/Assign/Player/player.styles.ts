import { makeStyles } from '@material-ui/core'

export const usePlayerStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-between',
    },
}))
