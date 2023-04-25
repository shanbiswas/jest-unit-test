import { render, screen, configure } from '@testing-library/react';
import TextCheck from './TextCheck';

configure({testIdAttribute: 'data-test-id'});

describe('By test id', () => {
  test('renders learn react link', () => {
    // Arrange
    render(<TextCheck />);
  
    // Act
    //Nothing
  
    // Assert
    const linkElement = screen.getByTestId('heading');
    expect(linkElement).toBeInTheDocument();
  });
});
