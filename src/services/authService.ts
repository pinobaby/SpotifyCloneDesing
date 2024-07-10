// src/services/authService.ts
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, OAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from './firebaseConfig';

// Función para registrar un nuevo usuario
const registerWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Función para iniciar sesión con email y password
const loginWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Función para iniciar sesión con Google
const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };

  // Función para iniciar sesión con Facebook
const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };

  // Función para iniciar sesión con Apple
const signInWithApple = async () => {
    const provider = new OAuthProvider('apple.com');
    try {
      const userCredential = await signInWithPopup(auth, provider);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };
export { registerWithEmailAndPassword, loginWithEmailAndPassword, signInWithGoogle, signInWithFacebook, signInWithApple  };
