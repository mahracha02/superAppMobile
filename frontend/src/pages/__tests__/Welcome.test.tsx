import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Welcome from '../Welcome';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Welcome Component', () => {
  it('renders welcome message in Arabic by default', () => {
    renderWithRouter(<Welcome />);
    expect(screen.getByText('مرحباً بك في متجرنا')).toBeInTheDocument();
  });

  it('changes language when selecting a different option', () => {
    renderWithRouter(<Welcome />);
    
    // Open language selector
    const languageSelector = screen.getByRole('combobox');
    fireEvent.click(languageSelector);
    
    // Select English
    const englishOption = screen.getByText('English');
    fireEvent.click(englishOption);
    
    // Check if text changed to English
    expect(screen.getByText('Welcome to our store')).toBeInTheDocument();
  });

  it('navigates to home page when clicking start button', () => {
    renderWithRouter(<Welcome />);
    
    const startButton = screen.getByRole('button', { name: /ابدأ/i });
    fireEvent.click(startButton);
    
    // Check if URL changed to /home
    expect(window.location.pathname).toBe('/home');
  });
}); 