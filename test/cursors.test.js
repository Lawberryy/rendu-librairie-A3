// Import the setCursor function from the cursors module.
import { setCursor } from '../src/cursors';

// Describe a group of tests for the setCursor function.
describe('setCursor()', () => {
  // This test checks if the setCursor function throws an error when the color parameter is not a string.
  it('should throw an error if the color param is not a string', () => {
    const cursorColor = 30;
    // We expect the function to throw an error with the message 'Parameters are not valid'.
    expect(() => setCursor('star', cursorColor, 24)).toThrow('Parameters are not valid');
  });

  // This test checks if the setCursor function throws an error when the type parameter is not a string.
  it('should throw an error if the type param is not a string', () => {
    const cursorType = 30;
    // We expect the function to throw an error with the message 'Parameters are not valid'.
    expect(() => setCursor(cursorType, '#ff0000', 24)).toThrow('Parameters are not valid');
  });

  // This test checks if the setCursor function returns NaN when the size parameter is not a number.
  it('should return NaN if the size param is not a number', () => {
    const cursorSize = '30';
    // We expect the function to return NaN.
    expect(setCursor('star', '#ff0000', cursorSize)).toBeNaN();
  });

  // This test checks if the setCursor function returns a string when all parameters are valid.
  it('should return a string', () => {
    // We expect the function to return a string.
    expect(typeof setCursor('star', '#ff0000', 32)).toBe('string');
  });
});
