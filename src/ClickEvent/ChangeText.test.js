import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ChangeText from './ChangeText';

describe('ChangeText component', () => {
  test('renders hello world text', () => {
    // Arrange
    render(<ChangeText />);
  
    // Act
    //Nothing
  
    // Assert
    const linkElement = screen.getByText(/Hello world/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders "Good to see you" if button was NOT clicked', () => {
    // Arrange
    render(<ChangeText />);
  
    // Act
    //Nothing
  
    // Assert
    const pElement = screen.getByText("Good to see you", {exact: false});
    expect(pElement).toBeInTheDocument();
  });

  test('renders "Changed" if button was clicked', () => {
    // Arrange
    render(<ChangeText />);
  
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
  
    // Assert
    const pElement = screen.getByText("changed", {exact: false});
    expect(pElement).toBeInTheDocument();
  });

  test('Check if "Good to see you" is gone if button was clicked', () => {
    // Arrange
    render(<ChangeText />);
  
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
  
    // Assert
    const pElement = screen.queryByText("Good to see you", {exact: false});
    expect(pElement).toBeNull();
  });
})


