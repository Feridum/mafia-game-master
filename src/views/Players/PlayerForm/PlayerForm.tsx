import React, { FC } from 'react'
import { Form, Field } from 'react-final-form'
import { TextField } from 'final-form-material-ui'
import { Grid, Button } from '@material-ui/core'
import { PlayerFormProps } from './PlayerForm.types'
import { usePlayerFormStyles } from './PlayerForm.styles'

export const PlayerForm: FC<PlayerFormProps> = ({
    handleSubmit,
    initialValue,
}) => {
    const classes = usePlayerFormStyles()
    return (
        <Form<{ name: string }>
            onSubmit={handleSubmit}
            initialValues={{ name: initialValue }}
            render={({ handleSubmit, submitting }) => (
                <form
                    onSubmit={handleSubmit}
                    noValidate
                    className={classes.container}
                >
                    <Field
                        fullWidth
                        required
                        name="name"
                        component={TextField}
                        type="text"
                        label="Imie gracza"
                        validate={value =>
                            value.length > 0 ? undefined : 'Pole wymagane'
                        }
                    />

                    <Grid
                        item
                        style={{ marginTop: 16 }}
                        className={classes.buttonContainer}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={submitting}
                        >
                            {initialValue !== '' ? 'Zapisz' : 'Dodaj'}
                        </Button>
                    </Grid>
                </form>
            )}
        />
    )
}
