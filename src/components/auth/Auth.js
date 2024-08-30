import React, { createContext, useContext, useState } from "react"

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {

    const [email, setEmail]         = useState(null)
    const [password, setPassword]   = useState(null)
    const [isLogedIn, setIsLogedIn] = useState(false)

    const login = (email, password) => {
        setEmail(email)
        setPassword(password)
        setIsLogedIn(true)

    }
    const logout = () => {
        setEmail (null)
        setPassword (null)
        setIsLogedIn (false)
    }

    return (
        <AuthContext.Provider value={{ email, password, isLogedIn , login, logout }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    return (
        useContext(AuthContext)
    )
}