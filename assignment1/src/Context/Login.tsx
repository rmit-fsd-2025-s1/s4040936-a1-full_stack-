import React, { createContext, useContext, useEffect, useState } from "react";
import { User, DEFAULT_USERS } from "../types/user";

interface LoginData{
user: User | null;
users: User[];
login: (email: string, password: string) => boolean;
logout: () => void;
}

const SignIn = createContext<LoginData | undefined>(undefined);

export function LoginProvider({ children } : {children: React.ReactNode}){
    const [user, setUser] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>([]);


    useEffect(() => {
        // Initialize users from localStorage or use defaults
        const storedUsers = localStorage.getItem("users");
        if (!storedUsers) {
          localStorage.setItem("users", JSON.stringify(DEFAULT_USERS));
          setUsers(DEFAULT_USERS);
        } else {
          setUsers(JSON.parse(storedUsers));
        }
    
        // Check for existing login
        const storedUser = localStorage.getItem("currentUser");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }, []);
    
      const login = (email: string, password: string): boolean => {
        const foundUser = users.find(
          (u) => u.email === email && u.password === password
        );
    
        if (foundUser) {
          setUser(foundUser);
          localStorage.setItem("currentUser", JSON.stringify(foundUser));
          return true;
        }
        return false;
      };
    
      const logout = () => {
        setUser(null);
        localStorage.removeItem("currentUser");
      };
    
      return (
        <SignIn.Provider value={{ user, users, login, logout }}>
        {children}
        </SignIn.Provider>
      );
    }
    
    export function useAuth() {
      const context = useContext(SignIn);
      if (context === undefined) {
        throw new Error("useAuth must be used within a Provider");
      }
      return context;
    }





