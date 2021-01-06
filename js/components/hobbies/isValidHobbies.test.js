import { isValidHobbies } from './isValidHobbies.js';

// {
//     selector: '#hobbies_block',
//     data: hobbiesData,
//     limit: 12,
//     borderRadius: 4
// }

describe('Tikriname funkcijos isValidHobbies duomenu formata', () => {
    test('netinkamas formatas', () => {
        expect(isValidHobbies()).toBeFalsy();
        expect(isValidHobbies(5455)).toBeFalsy();
        expect(isValidHobbies('')).toBeFalsy();
        expect(isValidHobbies('test')).toBeFalsy();
        expect(isValidHobbies(true)).toBeFalsy();
        expect(isValidHobbies(false)).toBeFalsy();
        expect(isValidHobbies([])).toBeFalsy();
    })

    test('tinkamas formatas bet tuscias objektas arba jo vertes blogos', () => {
        expect(isValidHobbies({})).toBeFalsy();
        expect(isValidHobbies({selector: 15})).toBeFalsy();
        expect(isValidHobbies({selector: ''})).toBeFalsy();
        expect(isValidHobbies({selector: 'body', data: 15})).toBeFalsy();
        expect(isValidHobbies({selector: 'body', data: []})).toBeFalsy();
        expect(isValidHobbies({selector: 'body', data: [{}], limit: ''})).toBeFalsy();
        expect(isValidHobbies({selector: 'body', data: [{}], limit: 'tra'})).toBeFalsy();
        expect(isValidHobbies({selector: 'body', data: [{}], limit: 0})).toBeFalsy();
        expect(isValidHobbies({selector: 'body', data: [{}], limit: -10})).toBeFalsy();
        expect(isValidHobbies({selector: 'body', data: [{}], limit: 3.1})).toBeFalsy();
    })

    test('tinkamas formatas', () => {
        expect(isValidHobbies({selector: 'body', data: [{}], limit: 12})).toBeTruthy();
    })
})