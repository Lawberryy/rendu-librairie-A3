import { setCursor } from '../src/cursors';

// test('Should check if type parameter is a string', () => {
//     const cursorType = 'star';
//     setCursor({ type: cursorType, color: '#ff0000', size: 30 });
//     expect(typeof cursorType).toBe('string');
//   });

// test('Should check if color parameter is a string', () => {
//     const cursorColor = '#ff0000';
//     setCursor({ type: 'star', color: cursorColor, size: 30 });
//     expect(typeof cursorColor).toBe('string');
//   });

// test('Should check if size parameter is a number', () => {
//     const cursorSize = '30';
//     setCursor({ type: 'star', color: '#ff0000', size: 'cursorSize' });
//     expect(typeof cursorSize).toBe('number');
//   });

describe('setCursor()', () => {
    it('should throw an error if the color param is not a string', () => {
        const cursorColor = 30;
        expect(() => setCursor({ type: 'star', color: cursorColor, size: 24 })).toThrow('Parameters are not valid');
    });

    it('should throw an error if the type param is not a string', () => {
        const cursorType = 30;
        expect(() => setCursor({ type: cursorType, color: '#ff0000', size: 24 })).toThrow('Parameters are not valid');
    });

    // it('should return NaN if the size param is not a number', () => {
    //     const cursorSize = '30';
    //     expect(setCursor({ type: 'star', color: '#ff0000', size: cursorSize })).toBeNaN();
    // });

    // it('check if return is a string', () => {
    //     expect(typeof setCursor({ type: 'star', color: '#ff0000', size: 32 })).toBe('string');
    // });
});
