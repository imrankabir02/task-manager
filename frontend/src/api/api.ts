import axios from 'axios';
import { LoginCredentials, RegisterData, Task } from '../types';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export const auth = {
  login: async (credentials: LoginCredentials) => {
    const response = await api.post('/auth/token/', credentials);
    return response.data;
  },
  register: async (data: RegisterData) => {
    const response = await api.post('/users/', data);
    return response.data;
  },
};

export const tasks = {
  getAll: async () => {
    const response = await api.get('/tasks/');
    return response.data;
  },
  getById: async (id: number) => {
    const response = await api.get(`/tasks/${id}/`);
    return response.data;
  },
  create: async (task: Partial<Task>) => {
    const response = await api.post('/tasks/', task);
    return response.data;
  },
  update: async (id: number, task: Partial<Task>) => {
    const response = await api.put(`/tasks/${id}/`, task);
    return response.data;
  },
  delete: async (id: number) => {
    await api.delete(`/tasks/${id}/`);
  },
  getByStatus: async (status: Task['status']) => {
    const response = await api.get(`/tasks/by_status/?status=${status}`);
    return response.data;
  },
};