const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

let dom;
let document;
let window;

describe('Login Page', () => {
    beforeEach(() => {
        dom = new JSDOM(html);
        document = dom.window.document;
    });

    test('form should exist', () => {
        const form = document.querySelector('#loginForm');
        expect(form).not.toBeNull();
    });

    test('username field should exist and be required', () => {
        const username = document.querySelector('#username');
        expect(username).not.toBeNull();
        expect(username.required).toBe(true);
    });

    test('password field should exist and be required', () => {
        const password = document.querySelector('#password');
        expect(password).not.toBeNull();
        expect(password.required).toBe(true);
    });

    test('form should have the correct action attribute', () => {
        const form = document.querySelector('#loginForm');
        expect(form.action).toBe('/login');
    });

    test('username field should have type text', () => {
        const username = document.querySelector('#username');
        expect(username.type).toBe('text');
    });

    test('password field should have type password', () => {
        const password = document.querySelector('#password');
        expect(password.type).toBe('password');
    });

    test('submit button should have the correct value', () => {
        const submitButton = document.querySelector('input[type="submit"]');
        expect(submitButton.value).toBe('Login');
    });

    test('submit button should exist', () => {
        const submitButton = document.querySelector('input[type="submit"]');
        expect(submitButton).not.toBeNull();
    });

    test('reset button should exist', () => {
        const resetButton = document.querySelector('input[type="reset"]');
        expect(resetButton).not.toBeNull();
    });
});
