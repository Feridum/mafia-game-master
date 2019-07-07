import { makeStyles } from '@material-ui/core'

export const useActionStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    button: {
        padding: theme.spacing(2),
    },
}))
