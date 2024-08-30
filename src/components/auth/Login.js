import React, { useState } from 'react'
import { Button, Container, Grid2, Paper, styled, TextField, Typography } from '@mui/material'
import { useAuth } from './Auth';
import { useLocation, useNavigate } from 'react-router-dom';
const RootDiv = styled('div')({
    flexGrow : 1
  });
const CustomForm = styled('form')({
    width      : '100%',
    marginTop  : '10px'
})

function Login() {
    const [email, setEmail]        = useState('')
    const [password, setPassword]  = useState('')
    const auth                     = useAuth()
    const navigate                 = useNavigate()
    const location                 = useLocation()
    const redirect                 = location.state?.path || '/'

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = {
            'email' : email,
            'password' : password
        }
        auth.login(formData.email, formData.password)
        //navigate('/users')
        navigate(redirect, {replace : true})

    }
  return (
    <RootDiv>
        <Container sx={{ marginTop : '16px' }} maxWidth="sm">
            <Paper sx={{ padding : '16px', color: '#2C3D50' }}>
                <Typography component="h1" variant="h5" align="center">
                        Login
                </Typography>
                <CustomForm onSubmit={handleSubmit}>
                    <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid2 size={12}>
                            <TextField
                                autoComplete="email"
                                name="email"
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                type="email"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid2>
                        <Grid2 size={12}>
                            <TextField
                                autoComplete="password"
                                name="password"
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid2>
                    </Grid2>
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={{ marginTop: 2 }}>Login</Button>
                </CustomForm>
            </Paper>
        </Container>
    </RootDiv>
  )
}

export default Login