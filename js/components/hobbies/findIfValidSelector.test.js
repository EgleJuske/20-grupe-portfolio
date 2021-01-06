import { TestScheduler } from "jest"
import { findIfValidSelector } from "./findIfValidSelector.js";

describe('Tikriname funkcijos findValidSelector duomenu formata', () => {
    test('netinkamas formatas', () => {
        expect(findIfValidSelector()).toBeFalsy();
        expect(findIfValidSelector(551)).toBeFalsy();
        expect(findIfValidSelector(true)).toBeFalsy();
        expect(findIfValidSelector(false)).toBeFalsy();
        expect(findIfValidSelector([])).toBeFalsy();
        expect(findIfValidSelector({})).toBeFalsy();
        expect(findIfValidSelector('')).toBeFalsy();
    })

    test('tinkamas formatas', () => {
        // expect(findIfValidSelector('body')).toBeTruthy();
        // expect(findIfValidSelector('div > p')).toBeTruthy();
    })
})