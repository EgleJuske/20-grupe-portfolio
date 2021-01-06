import { Menu } from './Menu.js';

const headerHTML = `<header class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <img class="logo" src="./img/logo.png" alt="logo">
                                <nav>
                                </nav>
                                <div class="socials">
                                    <a href="#" class="fa fa-facebook"></a>
                                    <a href="#" class="fa fa-twitter"></a>
                                    <a href="#" class="fa fa-instagram"></a>
                                </div>
                                <div class="fa fa-bars"></div>
                            </div>
                        </div>
                    </header>`

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

    test('can find element by given selector', () => {
        document.body.innerHTML = `<header><div>no nav</div></header>`;
        const menu = new Menu({
            selector: 'header nav'
        });
        expect(menu.isValidSelector()).toBeFalsy();
    })

    test('can find element by given selector', () => {
        document.body.innerHTML = headerHTML;
        const menu = new Menu({
            selector: 'header nav'
        });
        expect(menu.isValidSelector()).toBeTruthy();
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

describe('generate menu HTML', () => {
    test('check if nav is empty', () => {
        const menu = new Menu({
            selector: 'header nav',
            structure: []
        });
        menu.init();
        const linkCount = document.querySelectorAll(menu.selector + 'a').length;
        expect(linkCount).toBe(0);
    })
})