import React from "react";
import { AuthProvider } from "./AuthContext";
import AppContent from "./AppContent";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
