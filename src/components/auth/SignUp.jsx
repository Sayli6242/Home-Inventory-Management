import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../lib/auth';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await auth.signUp(email, password);
            navigate('/login');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSignUp} className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold">Sign Up</h2>
            <input
                type="email" value={email}
                onChange={(e) => setEmail(e.target.value)} required
                className="mt-2 p-2 border rounded w-full"
            />
            <input
                type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} required
                className="mt-2 p-2 border rounded w-full"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                Sign Up
            </button>
        </form>
    );
}
