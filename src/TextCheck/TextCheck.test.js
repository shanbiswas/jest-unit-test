import { render, screen } from '@testing-library/react';
import TextCheck from './TextCheck';

test('renders learn react link', () => {
  // Arrange
  render(<TextCheck />);

  // Act
  //Nothing

  // Assert
  const linkElement = screen.getByText(/learn unit test/i);
  expect(linkElement).toBeInTheDocument();
});
