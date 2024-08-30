import React from 'react'
import { Button, Container, Grid2, Paper, styled, TextField, Typography } from '@mui/material'
const RootDiv = styled('div')({
    flexGrow : 1
  });
const CustomForm = styled('form')({
    width      : '100%',
    marginTop  : '10px'
})

function Login() {
  return (
    <RootDiv>
        <Container sx={{ marginTop : '16px' }} maxWidth="sm">
            <Paper sx={{ padding : '16px', color: '#2C3D50' }}>
                <Typography component="h1" variant="h5" align="center">
                        Login
                </Typography>
                <CustomForm>
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
                            />
                        </Grid2>
                    </Grid2>
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={{ marginTop: 2 }}>Save</Button>
                </CustomForm>
            </Paper>
        </Container>
    </RootDiv>
  )
}

export default Login