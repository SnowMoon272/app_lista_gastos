import React, { useState, useContext, useEffect } from "react";
import { auth } from "../firebase/firebaseConfig";

// Creamos el contexto.
const AuthContext = React.createContext();

// Hook para acceder al contexto "Hook Personal"
const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [Usuario, cambiarUsuario] = useState();
  const [cargando, cambiarCargando] = useState(true);

  // Efecto para comprovar la sesion una vez.
  useEffect(() => {
    const cancelarSuscripcion = auth.onAuthStateChanged((usuario) => {
      cambiarUsuario(usuario);
      cambiarCargando(false);
    });
    return cancelarSuscripcion;
  }, []);

  return (
    <AuthContext.Provider value={{ usuario: Usuario }}>
      {!cargando && children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext, useAuth };
