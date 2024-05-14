import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppStore from './Utils/AppStore';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <App />
      </Provider>
    </BrowserRouter>

  );
  // const linkElement = screen.getByText(/learn react/i);
  const linkElement = screen.getByText('Home')
  expect(linkElement).toBeInTheDocument();
});



