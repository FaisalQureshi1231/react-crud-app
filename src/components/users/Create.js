import { Button, Container, Grid2, Paper, styled, TextField, Typography } from '@mui/material'
import React from 'react'

const RootDiv = styled('div')({
    flexGrow : 1
  });
const CustomForm = styled('form')({
    width      : '100%',
    marginTop  : '10px'
})
function Create() {
  return (
        <RootDiv>
            <Container sx={{ marginTop : '16px' }} maxWidth="md">
                <Paper sx={{ padding : '16px', color: '#2C3D50' }}>
                    <Typography align="center" component="h1" variant="h5">
                        User
                    </Typography>
                    <CustomForm>
                        <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid2 size={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid2>
                            <Grid2  size={6}>
                                <TextField
                                    autoComplete="off"
                                    name="lastName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                />
                            </Grid2>
                            <Grid2  size={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                />
                            </Grid2>
                            <Grid2  size={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    type="email"
                                />
                            </Grid2>
                            <Grid2  size={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="avatar"
                                    label="Avatar"
                                    type="url"
                                />
                            </Grid2>
                        </Grid2>
                        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ marginTop: 2 }}>Create</Button>
                    </CustomForm>
                </Paper>
            </Container>
        </RootDiv>
    )
}

export default Create