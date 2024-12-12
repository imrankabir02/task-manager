import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';
import { TaskList } from './components/Tasks/TaskList';
import { TaskForm } from './components/Tasks/TaskForm';
import { ProtectedRoute } from './components/Auth/ProtectedRoute';
import { AuthGuard } from './components/Auth/AuthGuard';
import { TaskUpdate } from './components/Tasks/TaskUpdate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <AuthGuard>
            <Login />
          </AuthGuard>
        } />
        <Route path="/register" element={
          <AuthGuard>
            <Register />
          </AuthGuard>
        } />

        <Route path="/tasks" element={
          <ProtectedRoute>
            <Layout>
              <TaskList />
            </Layout>
          </ProtectedRoute>
        } />

        <Route path="/tasks/new" element={
          <ProtectedRoute>
            <Layout>
              <TaskForm />
            </Layout>
          </ProtectedRoute>
        } />

        <Route
          path="/tasks/:id/edit"
          element={
            <ProtectedRoute>
              <Layout>
                <TaskUpdate />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route path="/" element={
          <ProtectedRoute>

            <Navigate to="/tasks" replace />
          </ProtectedRoute>
        } />

        <Route path="*" element={
          <Navigate to="/login" replace />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;