import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../../lib/Supabase';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data, error } = await supabase.auth.getSession();
                if (error) throw error;

                if (data?.session) {
                    setUser(data.session.user);
                } else {
                    console.warn('No active session found. User might need to log in.');
                    setUser(null);
                }
            } catch (error) {
                console.error('Authentication error:', error.message);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();

        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => listener.subscription.unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, signOut: supabase.auth.signOut }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
