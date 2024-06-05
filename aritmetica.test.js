import aritmetica from "./aritmetica.js";

const { soma, sub } = aritmetica;

describe("Teste das operações aritméticas com arrays", () => {
    test("A soma de [1, 2, 3] + [4, 5, 6] = [5, 7, 9]", () => {
        expect(soma([1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
    });

    test("A subtração de [5, 7, 9] - [1, 2, 3] = [4, 5, 6]", () => {
        expect(sub([5, 7, 9], [1, 2, 3])).toEqual([4, 5, 6]);
    });

    test("A soma de [10, 20, 30] + [1, 2, 3] = [11, 22, 33]", () => {
        expect(soma([10, 20, 30], [1, 2, 3])).toEqual([11, 22, 33]);
    });

    test("A subtração de [10, 20, 30] - [1, 2, 3] = [9, 18, 27]", () => {
        expect(sub([10, 20, 30], [1, 2, 3])).toEqual([9, 18, 27]);
    });
});
