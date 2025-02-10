import React from 'react';
import ReactDOM from 'react-dom/client'; // Importation pour React 18+
import './App.css'; // Import des styles globaux
import App from './App'; // Import du composant principal de l'application
import { BrowserRouter as Router } from 'react-router-dom'; // Import du routeur

// Sélectionner l'élément racine du DOM
const rootElement = document.getElementById('root');

// Vérifier si l'élément existe
if (rootElement) {
  // Créer une racine React à partir de l'élément sélectionné
  const root = ReactDOM.createRoot(rootElement);

  // Rendre l'application React dans le DOM
  root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
} else {
  console.error("L'élément avec l'ID 'root' n'a pas été trouvé dans le DOM.");
}
