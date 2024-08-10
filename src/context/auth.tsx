"use client"
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
// import { useRouter } from 'next/router';
import { auth, provider } from '@/config/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

interface AuthContextProps {
  user: any;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  // appUser:any~
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      const  parsedUser:any= localStorage.getItem('user');
      const appUser = JSON.parse(parsedUser);
    
      if (user) {
        return setUser(appUser);
      } 
      setLoading(false);
    });

  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
              setUser(user);
              const objUser ={
                name:user.displayName,
                email:user.email,
                userId:user.uid
              }
              localStorage.setItem('user', JSON.stringify(objUser));

    } catch (error: any) {
      console.error('Failed to sign in with Google', error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      localStorage.setItem('user', JSON.stringify({}));

              setUser(null);

    } catch (error) {
      console.error('Failed to sign out', error);
    }
  };

  return (
    <AuthContext.Provider value={{user, loading, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
