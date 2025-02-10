import { createContext, useContext, useEffect, useState } from 'react';
import auth from '../../lib/auth';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const currentUser = await auth.getUser();
                setUser(currentUser);
            } catch (error) {
                console.error('Error fetching user:', error.message);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, signOut: auth.signOut }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
