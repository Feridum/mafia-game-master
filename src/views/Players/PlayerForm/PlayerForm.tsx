import React, { FC } from 'react'
import { Form, Field } from 'react-final-form'
import { TextField } from 'final-form-material-ui'
import { Grid, Button } from '@material-ui/core'
import { PlayerFormProps } from './PlayerForm.types'

export const PlayerForm: FC<PlayerFormProps> = ({
    handleSubmit,
    initialValue,
}) => {
    return (
        <Form<{ name: string }>
            onSubmit={handleSubmit}
            initialValues={{ name: initialValue }}
            render={({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit} noValidate>
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

                    <Grid item style={{ marginTop: 16 }}>
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
