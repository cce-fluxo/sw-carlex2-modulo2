import React, { createContext, useCallback, useContext } from "react";
import api from "../services/api";

const AuthContext = createContext({});

export function AuthProvider({ children }) {

    const signIn = useCallback(async (data, setLoading, setLoginError) => {
        setLoading(true);
        try {
            const response = await api.post("/token", data)
            console.log(response.data)
            const { token } = response.data[0];
            const user = response.data[1];
            localStorage.setItem("@:token", token);
            localStorage.setItem("@:user", JSON.stringify(user));
        } catch (error) {
            console.log(error)
            setLoginError(true)
        }
        setLoading(false)
    },[])
    return (
        <AuthContext.Provider value={{signIn}}>
          {children}
        </AuthContext.Provider>
      );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  }