import { useNavigate } from 'react-router-dom';

const useNavigateToSection = () => {
  const navigate = useNavigate();

  const navigateToSection = (path, sectionId) => {
    navigate(path); // Redirige vers le chemin donné
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Attends que la page ait été rendue
  };

  return navigateToSection;
};

export default useNavigateToSection;
