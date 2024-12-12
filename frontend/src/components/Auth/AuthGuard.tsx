import { Navigate } from "react-router-dom";

interface AuthGuardProps {
    children: React.ReactNode;
}

export const AuthGuard = ({children}: AuthGuardProps) => {
    const token = localStorage.getItem('token')

    if(token) {
        return <Navigate to="/tasks" replace />
    }

    return <>{children}</>
}