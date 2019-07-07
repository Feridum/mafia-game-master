import React, { FC, useContext } from 'react'
import { BaseLayout } from 'shared/BaseLayout/BaseLayout'
import { Form, Field } from 'react-final-form'
import { TextField } from 'final-form-material-ui'
import { Grid, Button } from '@material-ui/core'
import { useStoreActions } from 'store/store'
import { __RouterContext } from 'react-router'

export const AddPlayer: FC = () => {
    const router = useContext(__RouterContext)
    const addPlayer = useStoreActions(actions => actions.player.addPlayer)

    const handleSubmit = (values: { name: string }) => {
        addPlayer(values.name)
        router.history.goBack()
    }
    return (
        <BaseLayout>
            <Form
                onSubmit={handleSubmit}
                initialValues={{ name: '' }}
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
                                Dodaj
                            </Button>
                        </Grid>
                    </form>
                )}
            />
        </BaseLayout>
    )
}
