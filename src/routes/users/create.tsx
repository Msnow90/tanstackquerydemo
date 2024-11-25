import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router'
import useCreateUser from '../../hooks/useCreateUser';

export const Route = createFileRoute('/users/create')({
  component: RouteComponent,
})

function RouteComponent() {
  const { mutate } = useCreateUser();
    // Form state
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        birthdate: '',
        registeredAt: new Date().toISOString(), // Auto-generated as current date
    });

    // Handle input changes
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('User Data:', formData);
        mutate({ user: formData });
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h2>Create User</h2>
            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="username" style={{ display: 'block', marginBottom: '.5rem' }}>
                    Username:
                </label>
                <input
                    autoComplete="new-password"
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '0.5rem' }}
                />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '.5rem' }}>
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '0.5rem' }}
                />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="password" style={{ display: 'block', marginBottom: '.5rem' }}>
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '0.5rem' }}
                />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="birthdate" style={{ display: 'block', marginBottom: '.5rem' }}>
                    Birthdate:
                </label>
                <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '0.5rem' }}
                />
            </div>


            <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
                Create User
            </button>
        </form>
    );
};

export default RouteComponent;
