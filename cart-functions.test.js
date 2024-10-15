



const { calculateChange, calculateTotal, isSufficientPayment, addItem, removeItem } = require('../src/js/cart-functions.js');

/*describe("calculateChange", () => {
  test.todo("add calculateChange tests here");
});*/

// calculate change test
test('subtracts 6 - 5 and equals 1',()=> {
  expect(calculateChange(6,5)).toBe(1);
});

test('Given total 12.30 and payment 13.03, it returns 0.73.', () =>{
expect(calculateChange(13.03,12.30)).toBe(0.73);
});

test('Given total 100 and payment 150, it returns 50',()=>{
  expect(calculateChange(150,100)).toBe(50);
});

//isSufficientPayment test 
describe("isSufficientPayment", () => {
  test.todo("add isSufficientPayment tests here");
});

test('Given total 5 and payment 6, it returns true', () => {
  expect(isSufficientPayment(5, 6)).toBe(true);  
});

test('Given total 10 and payment 7, it returns false.', () => {
  expect(isSufficientPayment(10, 7)).toBe(false);  
});

test('Given total 3 and payment 3, it returns true.', () => {
  expect(isSufficientPayment(3, 3)).toBe(true);
});

test('Given total 0 and payment 3, it returns true.', () => {
  expect(isSufficientPayment(0, 3)).toBe(true);  
});

// test for calculateTotal
describe("calculateTotal", () => {
  test.todo("add calculateTotal tests here");
});

test('Given an itemsArray of one item with price 4.99, it returns 4.99.', () => {
  expect(calculateTotal([{ name: "Chips", price: 4.99 }]).totalPrice).toBe(4.99);
});

test('Given an itemsArray of three items with prices 3.50, 12.99, and 0.03, it returns 16.52.', () => {
  
  const itemsArray = [
    { name: 'Faygo', price: 3.50 },
    { name: 'Vernors', price: 12.99 },
    { name: 'Ohana', price: 0.03 }
  ];

  expect(calculateTotal(itemsArray).totalPrice).toBe(16.52);
});

test('Given an empty itemsArray, it returns 0.', () => {
  // Act & Assert: Call calculateTotal with an empty array and check if totalPrice is 0
  expect(calculateTotal([]).totalPrice).toBe(0);
});

test('Give an array of two items with price of 50, it returns 100',()=>{
  const itemsArray = [
    { name: 'Air Forces' , price: 50},
    { name: 'Levi Jeans' , price: 50}
  ];
  expect(calculateTotal(itemsArray).totalPrice).toBe(100);
})

//add item test
describe("addItem", () => {
  test.todo("add addItem tests here");
});



test('Call addItem with an empty itemsArray, name "Beans" and price 3. Then check that itemsArray has one item in it: { name: "Beans", price: 3 }.', () => {
  // Arrange empty array
  const itemsArray = [];

  // Act:
  addItem(itemsArray, "Beans", 3);

  
  expect(itemsArray[0]).toEqual({ name: "Beans", price: 3 });
});

test('Create an itemsArray with one item in it: { name: "Beans", price: 3 }. Call addItem with itemsArray, name "Sugar" and price 2. Then check that itemsArray has two items in it: { name: "Beans", price: 3 } and { name: "Sugar", price: 2 }. ', () => {
 
  const itemsArray = [
    { name: "Beans", price: 3 }
  ];

  // Act: Call addItem to add a new item
  addItem(itemsArray, "Sugar", 2);

  // Assert: Check that itemsArray has two items
  expect(itemsArray[1]).toEqual({ name: "Sugar", price: 2 }); // Check if the second item matches
});

test('Create an itemsArray with 3 items in it. Call addItem with itemsArray and update new array',() => {
  const itemsArray= [
    {name:"Nikes", price: 50.00},
    {name: "Adiddas",price: 150.00},
    {name: "Puma",price: 40.63}
  ];
  addItem(itemsArray)

  //added item to itemsArray
  addItem(itemsArray, "Reeboks", 70); 

  expect(itemsArray[3]).toEqual({name:"Reeboks", price:70});

});

describe("removeItem", () => {
  test.todo("add removeItem tests here");
});

test('Remove the first element from an array of three items.',()=>{
  // arrange
  const itemsArray = [
    {name: "Red", price: 1.99},
    {name: "Blue", price: 2.99},
    {name: "Green", price: 3.99}
  ];
  //act
  removeItem(itemsArray,1);

  expect(itemsArray[1]).toEqual({name: "Green", price: 3.99});

});

test('Remove the last element from an array of three items.',()=>{
  //arrange
  const itemsArray = [
    {name: "Yellow", price: 1.99},
    {name: "Pink", price: 2.99},
    {name: "Gold", price: 3.99}
  ];

  //act
  removeItem(itemsArray,2)

  //assert
  expect(itemsArray[1]).toEqual(  {name: "Pink", price: 2.99});
});

test('Remove the middle element from an array of three items.',()=>{
  const itemsArray = [
    {name: "Drake", price: 1.99},
    {name: "Cole", price: 2.99},
    {name: "Kendrick", price: 3.99}
  ];
  //act
  removeItem(itemsArray,1);
  expect(itemsArray[1]).toEqual( {name: "Kendrick", price: 3.99});
});

test('Remove the only element from an array of one item.',()=>{
  const itemsArray = [
    {name: "Soda", price: 1.99}
  ];

  //act
  removeItem(itemsArray,0);

  // assert
  expect(itemsArray).toEqual([])
});




