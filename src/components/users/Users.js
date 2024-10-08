import React, { useEffect, useState } from 'react'
import { Avatar, Box, Button, ButtonGroup, Container, Paper, styled, Table, TableBody, 
          TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useAuth } from '../auth/Auth';

const RootDiv = styled('div')({
  flexGrow : 1
});

function Users() {
  const [users, setUsers] = useState([])
  const auth              = useAuth()

  const getUsers = () => {
    axios.get('https://www.melivecode.com/api/users')

         .then((result) => {
          console.log(result)
                setUsers(result.data)
         }).catch((err) => {
            console.log('Error: ', err)
         });
  }
  useEffect(()=>{
    getUsers()
  }, [])

  // const updateUser = (id) => {
  //   console.log(id)
  //   window.location = '/update/' + id
  // }

  const deleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      axios.delete(`https://www.melivecode.com/api/users/delete`, {
        data: { id } // Sending ID as part of the request body, if needed
      })
      .then((response) => {
        const data = response.data;
        if (data.status === 'ok') {
          alert(data.message);
          getUsers(); // Refresh the list of users
        } else if (data.status === 'error') {
          alert('Error: ' + data.message);
        }
      })
      .catch((error) => {
        console.log('Error: ', error);
        alert('Failed to delete user.');
      });
    }
  };
  return (
    <RootDiv>
      <Container sx={{ marginTop : '16px' }} maxWidth="lg">
        <Paper sx={{ padding : '16px', color: '#2C3D50' }}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                USERS
              </Typography>
            </Box>
            <Box>
              {
                auth.isLogedIn && 
                <Link to="/create">
                  <Button variant="contained" color="primary">
                    CREATE
                  </Button>
                </Link>
              }
            </Box>
          </Box>
          <TableContainer sx={{ marginTop: '10px', flexGrow : 1}} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="center">Avatar</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Username</TableCell>
                  {
                    auth.isLogedIn && 
                    <TableCell align="center">Action</TableCell>
                  }
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  users.map(user => (
                    <TableRow key={user.id}>
                      <TableCell align="right">{user.id}</TableCell>
                      <TableCell align="center">
                        <Box display="flex" justifyContent="center">
                          <Avatar src={user.avatar} />
                        </Box>
                      </TableCell>
                      <TableCell align="left">{user.fname} {user.lname}</TableCell>
                      <TableCell align="left">{user.username}</TableCell>
                      <TableCell align="center">
                        {
                          auth.isLogedIn && 
                          <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <Link to={`/update/${user.id}`}>
                              <Button>Edit</Button>
                            </Link>
                            <Button onClick={() => deleteUser(user.id)}>Del</Button>
                          </ButtonGroup>
                        }
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </RootDiv>
  )
}

export default Users