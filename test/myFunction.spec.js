const greet = require('../src/myFunction');

describe('greet', () => {
    it('greets the user', () => {
        expect(greet('Mason')).toBe('Hello, Mason');
    });

    it('gives generic greeting when user is empty', () => {
        expect(greet('')).toBe('Hello!');
    });

    it('throws an error when user is not a string', () => {
        expect(() => greet(3)).toThrow('name needs to be a string');
    });
});