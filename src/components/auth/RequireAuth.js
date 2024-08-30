import React from 'react'
import { useAuth } from './Auth'
import { Navigate } from 'react-router-dom'

export default function RequireAuth({children}) {
    const auth     = useAuth()
    console.log(auth)
    if (!auth.isLogedIn) {
        return <Navigate to='/login' />
    }
  return children
}
