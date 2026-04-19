const isValidEmail = require('../aboutus.js');

describe('Email Validation', () => {

    test('Valid email returns true', () => {
        expect(isValidEmail('raywekesa@gmail.com')).toBe(true);
    });

    test('Email without @ symbol returns false', () => {
        expect(isValidEmail('raywekesagmail.com')).toBe(false);
    });

    test('Email without dot returns false', () => {
        expect(isValidEmail('raywekesa@gmailcom')).toBe(false);
    });

    test('Email with spaces returns false', () => {
        expect(isValidEmail('ray wekesa@gmail.com')).toBe(false);
    });

});