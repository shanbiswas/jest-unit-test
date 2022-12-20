import { render, screen } from '@testing-library/react';
import FetchData from './FetchData';

test('renders listitems', async () => {
  // Mock data
  window.fetch = jest.fn();
  window.fetch.mockResolvedValueOnce({
    json: async () => [{id: 1, title: 'Mock title'}]
  });

  // Arrange
  render(<FetchData />);

  // Act
  //Nothing

  // Assert
  const listElement = await screen.findAllByRole('listitem');
  expect(listElement).not.toHaveLength(0);
});


