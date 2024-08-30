import React from 'react'
import { useAuth } from '../auth/Auth'

function Home() {
  const auth = useAuth()
  return (
    <div><h3>This is Home Page 
      {
        auth.isLogedIn &&  `::  ${auth.email} -  ${auth.password}`
      } 
      </h3></div>
  )
}

export default Home