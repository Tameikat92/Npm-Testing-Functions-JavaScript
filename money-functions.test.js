 
const  {formatCurrency, getCoins} = require('../src/js/money-functions.js');


describe("formatCurrency", () => {
  test.todo("add formatCurrency tests here");
});

test('Given the amount 0, it returns "$0.00"',() =>{
  expect(formatCurrency(0)).toBe("$0.00");

});

test('Given the amount 1, it returns "$1.00"',()=>{
  expect(formatCurrency(1)).toBe("$1.00");

});

test('Given the amount 1.5 it returns "$1.50".',()=>{
  expect(formatCurrency(1.5)).toBe("$1.50");
});

test('Given the amount 0.01, it returns "$0.01".',()=>{
  expect(formatCurrency(0.01)).toBe("$0.01");
});

test('Given the amount 527.6789, it returns "$527.68".',()=>{
  expect(formatCurrency(527.6789)).toBe("$527.68");
});

test('Given the amount -1, it returns "-$1.00".',()=>{
  expect(formatCurrency(-1)).toEqual("-$1.00");
});

test('Given the amount -5, it returns "-$5.00".', () => {
  expect(formatCurrency(-5)).toEqual("-$5.00");
});


test('Given the amount 5.99, it returns "$5.99".',()=>{
  expect(formatCurrency(5.99)).toBe("$5.99");
});




describe("getCoins", () => {
  test.todo("add getCoins tests here");
});

test('32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.',() => {

});

test('32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.',() => {
  const result = getCoins(32);

  expect(result).toEqual({
    quarters: 1,
    dimes: 0,
    nickels: 1,
    pennies: 2
  });
});

test('10 cents produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0.',() => {
  const tenCent = getCoins(10);

  expect(tenCent).toEqual({
    quarters: 0,
    dimes: 1,
    nickels: 0,
    pennies:0 
  });

});


test('27 cents produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2.',() => {

  const twentySevenCents = getCoins(27);

  expect(twentySevenCents).toEqual({
    quarters: 1,
    dimes: 0,
    nickels:0,
    pennies:2
  });

});

test('68 cents produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3.',() => {
const sixtyEightCent = getCoins(68);

expect(sixtyEightCent).toEqual({
  quarters: 2,
  dimes: 1,
  nickels:1,
  pennies: 3
});

});


