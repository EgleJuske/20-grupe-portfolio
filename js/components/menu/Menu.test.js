import { ESLint } from 'eslint';
import { TestScheduler } from 'jest';
import { Menu } from './Menu.js';

describe('is valid selector', () => {
    test('is invalid if number is given', () => {
        const menu = new Menu({
            selector: 666
        });
        expect(menu.isValidSelector()).toBeFalsy();
    })
    test('is invalid if array is given', () => {
        const menu = new Menu({
            selector: []
        });
        expect(menu.isValidSelector()).toBeFalsy();
    })
    test('is invalid if object is given', () => {
        const menu = new Menu({
            selector: {}
        });
        expect(menu.isValidSelector()).toBeFalsy();
    })
    test('is invalid if boolean is given', () => {
        const menu = new Menu({
            selector: true
        });
        expect(menu.isValidSelector()).toBeFalsy();
    })
    test('is invalid if empty string is given', () => {
        const menu = new Menu({
            selector: ''
        });
        expect(menu.isValidSelector()).toBeFalsy();
    })
})

describe('generate valid HTML for a menu link', () => {
    test('is valid home link', () => {
        const menu = new Menu({selector: '', structure: []})
        expect(menu.generateHTML(666)).toBe('');
    })
    test('is valid home link', () => {
        const menu = new Menu({selector: '', structure: []})
        expect(menu.generateHTML(true)).toBe('');
    })
    test('is valid home link', () => {
        const menu = new Menu({selector: '', structure: []})
        expect(menu.generateHTML({title: 'Home', href: '/'})).toBe('<a href="/" class="active">Home</a>');
        expect(menu.generateHTML({title: 666, href: '/'})).toBe('');
        expect(menu.generateHTML({title: 'Home', href: 666})).toBe('');
        expect(menu.generateHTML({title: 'Home'})).toBe('');
        expect(menu.generateHTML({href: '/'})).toBe('');
    })
    test('is valid innper page link', () => {
        const menu = new Menu({selector: '', structure: []})
        expect(menu.generateHTML({title: 'Services', href: '/services'})).toBe('<a href="/services" class="">Services</a>');
    })
})