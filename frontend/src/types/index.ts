export type TaskStatus = 'todo' | 'started' | 'complete' | 'archived';

export interface User {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
  }
  
  export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    due: string;
    created: string;
    updated: string;
    user: number;
  }
  
  export interface TaskFormData {
    title: string;
    description: string;
    status: TaskStatus;
    due: string;
  }  
  
  export interface LoginCredentials {
    username: string;
    password: string;
  }
  
  export interface RegisterData extends LoginCredentials {
    email: string;
    first_name: string;
    last_name: string;
  }
  
  export interface AuthResponse {
    token: string;
    user_id: number;
    email: string;
  }