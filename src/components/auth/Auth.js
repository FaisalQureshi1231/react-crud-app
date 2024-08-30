import React, { createContext, useContext, useState } from "react"

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {

    const [email, setEmail]       = useState(null)
    const [password, setPassword] = useState(null)

    const login = (email, password) => {
        setEmail(email)
        setPassword(password)
    }
    const logout = () => {
        setEmail (null)
        setPassword (null)
    }

    return (
        <AuthContext.Provider value={{ email, password, login, logout }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    return (
        useContext(AuthContext)
    )
}