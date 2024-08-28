import React from 'react'
import { Box, Button, Container, Paper, styled, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const RootDiv = styled('div')({
  flexGrow : 1
});

function Users() {
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
              <Link to="/create">
                <Button variant="contained" color="primary">
                  CREATE
                </Button>
              </Link>
            </Box>
          </Box>
          <TableContainer sx={{ marginTop: '10px', flexGrow : 1}} component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="center">Avatar</TableCell>
                  <TableCell align="left">First</TableCell>
                  <TableCell align="left">Last</TableCell>
                  <TableCell align="left">Username</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </RootDiv>
  )
}

export default Users