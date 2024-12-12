import { useCallback, useState } from 'react';
import { auth } from '../api/api';
import { LoginCredentials, RegisterData } from '../types';

type AuthResponse = {
  token: string;
  user_id: number;
  email: string;
}

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await auth.login(credentials);
      localStorage.setItem('token', response.token);
      return response;
    } catch (err) {
      setError('Login failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(async (data: RegisterData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await auth.register(data);
      localStorage.setItem('token', response.token);
      return response;
    } catch (err) {
      setError('Registration failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
  }, []);

  return {
    login,
    register,
    logout,
    isLoading,
    error,
  };
};