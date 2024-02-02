const { expect } = require("@jest/globals");
const { isPrime, nameVowels, addProperty, palindromes, anagrams, ageSum } = require("./");

test("isPrime", () => {
    expect(isPrime(0)).toEqual(false);
    expect(isPrime(1)).toEqual(false);
    expect(isPrime(2)).toEqual(true);
    expect(isPrime(3)).toEqual(true);
    expect(isPrime(4)).toEqual(false);
    expect(isPrime(5)).toEqual(true);
    expect(isPrime(9)).toEqual(false);
    expect(isPrime(12)).toEqual(false);
    expect(isPrime(11)).toEqual(true);
    expect(isPrime(23)).toEqual(true);
    expect(isPrime(27)).toEqual(false);
    expect(isPrime(99)).toEqual(false);
    expect(isPrime(18767)).toEqual(false);
    expect(isPrime(19571)).toEqual(true);
    expect(isPrime(234)).toEqual(false);
});

test("nameVowels", () => {
    expect(nameVowels()).toEqual(3);
});

test("addProperty", () => {
    const items = addProperty();
    expect(items[0].gender).toEqual('M');
    expect(items[1].gender).toEqual('F');
    expect(items[2].gender).toEqual('F');
    expect(items[3].gender).toEqual('N/A');
    expect(items[4].gender).toEqual('F');
    expect(items[5].gender).toEqual('N/A');
    expect(items[6].gender).toEqual('F');
    expect(items[7].gender).toEqual('N/A');
    expect(items[8].gender).toEqual('M');
    expect(items[9].gender).toEqual('N/A');
});

test("palindromes", () => {
    expect(palindromes('asdf')).toEqual(false);
    expect(palindromes('kayak')).toEqual(true);
    expect(palindromes('raceCar')).toEqual(true);
    expect(palindromes('1234567890')).toEqual(false);
    expect(palindromes('qwer tyui opas dfgh jklz xcvb nm')).toEqual(false);
    expect(palindromes('a')).toEqual(true);
    expect(palindromes('ooo')).toEqual(true);
    expect(palindromes('Rotator')).toEqual(true);
});

test("anagrams", () => {
    expect(anagrams('asdf', 'qwer')).toEqual(false);
    expect(anagrams('aaaa', 'aaaa')).toEqual(true);
    expect(anagrams('Dogs', 'Gods')).toEqual(true);
    expect(anagrams('adulterating', 'triangulated')).toEqual(true);
    expect(anagrams('cats', 'cat')).toEqual(false);
    expect(anagrams('dog', 'dogs')).toEqual(false);
});

test("ageSum", () => {
    expect(ageSum()).toEqual(924);
});
