import { add, isPalandrome } from '../add';


test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 5 + -7 to equal -2', () => {
  expect(add(5, -7)).toBe(-4);
});

test('password is palandrome', () => {
  expect(isPalandrome('123321')).toBe(true);
});
test('password is not palandrome', () => {  
  expect(isPalandrome('1233211')).toBe(true);
}); 
