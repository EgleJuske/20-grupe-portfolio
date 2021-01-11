import { TestScheduler } from "jest"
import { Gallery } from './Gallery.js';

describe('Validuojame parametrus', () => {
    // test('turetu grazinti false, jei parametrai yra ne objektas', () => {
    //     const gallery = new Gallery();
    //     expect(Object.keys(gallery).length).toBe(0);
    // })

    test('turetu grazinti false, jei parametrai yra tuscias objektas', () => {
        const gallery = new Gallery({});
        expect(Object.keys(gallery).length).toBe(0);
    })

    test('turetu grazinti false, jei selector nera tekstinis', () => {
        const params = {
            selector: 12
        }
        const gallery = new Gallery(params);
        expect(gallery.isValidInput()).toBeFalsy();
    })

    test('turetu grazinti false, jei selector yra tuscias tekstas', () => {
        const params = {
            selector: ''
        }
        const gallery = new Gallery(params);
        expect(gallery.isValidInput()).toBeFalsy();
    })

    test('turetu grazinti false, jei duomenys nera array', () => {
        const params = {
            selector: 'body',
            data: 15
        }
        const gallery = new Gallery(params);
        expect(gallery.isValidInput()).toBeFalsy();
    })

    test('turetu grazinti false, jei duotas neegzistuojantis selector', () => {
        document.body.innerHTML = '';
        const params = {
            selector: 'h1',
            data: [{}]
        }
        const gallery = new Gallery(params);
        expect(gallery.isValidSelector()).toBeFalsy();
    })
})