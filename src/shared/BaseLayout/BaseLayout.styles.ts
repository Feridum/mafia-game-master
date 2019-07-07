import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },

    childContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
}))
