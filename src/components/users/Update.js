import { Button, Container, Grid2, Paper, styled, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const RootDiv = styled('div')({
    flexGrow : 1
  });
const CustomForm = styled('form')({
    width      : '100%',
    marginTop  : '10px'
})
function Update() {
    const [fname, setFname]       = useState('');
    const [lname, setLname]       = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail]       = useState('');
    const [avatar, setAvatar]     = useState('');
    const { id }                 = useParams();
    useEffect(() => {
        axios.get(`https://www.melivecode.com/api/users/${id}`)
             .then((response) => {
                const data = response.data;
                console.log(data)
                if(data.status === 'ok'){
                    setFname(data.user.fname)
                    setLname(data.user.lname)
                    setUsername(data.user.username)
                    setEmail(data.user.email)
                    setAvatar(data.user.avatar)
                }
             })
             .catch((error) => {
                console.log('Error: ', error)
             })
    },[id])
  return (
        <RootDiv>
            <Container sx={{ marginTop : '16px' }} maxWidth="md">
                <Paper sx={{ padding : '16px', color: '#2C3D50' }}>
                    <Typography align="center" component="h1" variant="h5">
                        Update User
                        <Link to='/users'>
                            <Button sx={{float : 'right'}} variant="contained">Back</Button>
                        </Link>
                    </Typography>
                    <CustomForm>
                        <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid2 size={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    value={fname}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    onChange={(e) => setFname(e.target.value)}
                                />
                            </Grid2>
                            <Grid2  size={6}>
                                <TextField
                                    autoComplete="off"
                                    name="lastName"
                                    value={lname}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    onChange={(e) => setLname(e.target.value)}
                                />
                            </Grid2>
                            <Grid2  size={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={avatar}
                                    onChange={(e) => setAvatar(e.target.value)}
                                />
                            </Grid2>
                        </Grid2>
                        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ marginTop: 2 }}>Update</Button>
                    </CustomForm>
                </Paper>
            </Container>
        </RootDiv>
    )
}

export default Update