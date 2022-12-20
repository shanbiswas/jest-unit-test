import { render, screen } from '@testing-library/react';
import TextCheck from './GroupTextCheck';

describe('TextCheck component', () => {
  test('renders learn react link', () => {
    // Arrange
    render(<TextCheck />);
  
    // Act
    //Nothing
  
    // Assert
    const linkElement = screen.getByText(/Group Test/i);
    expect(linkElement).toBeInTheDocument();
  });
})


