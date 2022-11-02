import React from 'react';
import { Paper, Card,CardContent, Button, TextField } from '@mui/material';

const Main = () => {
    return (
        <div>
            <Paper elevation={3}>
                <p>Hola mundo!</p>
            </Paper>
            <Card>
                <CardContent>
                    <h1>Esta es una card</h1>
                </CardContent>
            </Card>
            <Button>Boton de prueba</Button>
            <TextField variant='filled'></TextField>
        </div>
    );
}

export default Main;
