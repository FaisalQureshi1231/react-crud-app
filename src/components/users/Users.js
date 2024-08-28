import { Box, Container, Paper, styled, Typography } from '@mui/material'
import React from 'react'

const RootDiv = styled('div')({
  flexGrow : 1
})

function Users() {
  return (
    <RootDiv>
      <Container maxWidth="lg">
        <Paper>
          <Box display="flex">
            <Box>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                USERS
              </Typography>
            </Box>
            <Box>

            </Box>
          </Box>
        </Paper>
      </Container>
    </RootDiv>
  )
}

export default Users