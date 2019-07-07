import { makeStyles } from '@material-ui/core'

export const usePlayerFormStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(3),
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
}))
