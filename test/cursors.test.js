import { setCursor } from '../src/cursors';

describe('setCursor()', () => {
  it('should throw an error if the color param is not a string', () => {
    const cursorColor = 30;
    expect(() => setCursor('star', cursorColor, 24)).toThrow('Parameters are not valid');
  });

  it('should throw an error if the type param is not a string', () => {
    const cursorType = 30;
    expect(() => setCursor(cursorType, '#ff0000', 24)).toThrow('Parameters are not valid');
  });

  it('should return NaN if the size param is not a number', () => {
    const cursorSize = '30';
    expect(setCursor('star', '#ff0000', cursorSize)).toBeNaN();
  });

  it('should return a string', () => {
    expect(typeof setCursor('star', '#ff0000', 32)).toBe('string');
  });
});
