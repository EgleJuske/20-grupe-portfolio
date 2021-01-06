import { TestScheduler } from "jest"

import { isValidHobbieItem } from './isValidHobbieItem.js';

describe('Tikriname duomenu dormata', () => {
    test('netinkamas formatas', () => {
        expect(isValidHobbieItem()).toBeFalsy();
        expect(isValidHobbieItem(true)).toBeFalsy();
        expect(isValidHobbieItem(false)).toBeFalsy();
        expect(isValidHobbieItem([])).toBeFalsy();
        expect(isValidHobbieItem({})).toBeFalsy();
    })

    test('netinkamas objekto raktazodziu tipas', () => {
        expect(isValidHobbieItem({ icon: 99, title: '' })).toBeFalsy();
        expect(isValidHobbieItem({ icon: '', title: 99 })).toBeFalsy();
        expect(isValidHobbieItem({ icon: '', title: '' })).toBeFalsy();
    })

    test('tinkama objekto struktura', () => {
        expect(isValidHobbieItem( { icon: 'television', title: 'Developing' } )).toBeTruthy();
        expect(isValidHobbieItem( { icon: 'globe', title: 'Globing' } )).toBeTruthy();
    })
})