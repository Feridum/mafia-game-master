import { makeStyles } from '@material-ui/core'

export const useMenuStyles = makeStyles(theme => ({
    button: {
        width: '100%',
        height: 100,
        marginBottom: theme.spacing(2),
    },
    container: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
}))
