import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput, Button, Paper, Title, Container } from '@mantine/core';
import { useAuth } from '../../hooks/useAuth';

export const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
  });
  const { register, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(formData);
      navigate('/tasks');
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container size={420} my={40}>
      <Title align="center">Create an account</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            mt="md"
          />
          <TextInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            mt="md"
          />
          <TextInput
            label="First Name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
            mt="md"
          />
          <TextInput
            label="Last Name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
            mt="md"
          />
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <Button type="submit" fullWidth mt="xl" loading={isLoading}>
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  );
};