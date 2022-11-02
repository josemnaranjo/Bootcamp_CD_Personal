import React from 'react';
import { Paper,FormControl,InputLabel,OutlinedInput, Button } from '@mui/material';
const styles = {
    paper: {
        with: "20rem", padding: "1rem"
    },
    input: {
        marginBottom:"1rem"
    },
    button: {
        width:"100%"
    }
}

const Form = () => {
    return (
        <Paper elevation={3} style={styles.input}>
            <h2>Formulario de registro</h2>
            <FormControl variant='outlined' style={styles.input}>
                <InputLabel>Nombre de usuario</InputLabel>
                <OutlinedInput type='text'/>
            </FormControl>

            <FormControl variant='outlined' style={styles.input}>
                <InputLabel>Email</InputLabel>
                <OutlinedInput type='text'/>
            </FormControl>

            <FormControl variant='outlined' style={styles.input}>
                <InputLabel>Contraseña</InputLabel>
                <OutlinedInput type='password'/>
            </FormControl>

            <FormControl variant='outlined' style={styles.input}>
                <InputLabel>Password</InputLabel>
                <OutlinedInput type='password'/>
            </FormControl>

            <Button type="submit" variant='contained' color="primary">Registrarse</Button>
        </Paper>
    );
}

export default Form;
