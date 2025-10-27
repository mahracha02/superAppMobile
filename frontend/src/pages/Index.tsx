import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirigir a la página de bienvenida
    navigate('/');
  }, [navigate]);

  return null;
};

export default Index;
