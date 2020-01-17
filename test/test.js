const isAnagram = require('../src/anagram');

/*
* Anagram Testing file
*/

test('isAnagram function exists', () => {
  // Complete here
  expect(isAnagram()).toBeDefined();
});

test('"cinema" is an anagram of "iceman"', () => {
  // Complete here
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
  // Complete here
  expect(isAnagram('dormitory', 'dirty room')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  // Complete here
  expect(isAnagram('hello', 'aloha')).toBeFalsy();
});

/*
* Various functions Testing file
*/

const functions = require('../src/variousfunctions');

const nameCheck = () => console.log('Checking Name.');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    //Check if the user is Jeff
    // Complete here
      expect(functions.fetchUser(user)).not.toBeNull();    
  });

  test('User is Karen', () => {
    const user = 'Karen';
    //Check if the user is Karen
    // Complete here 
    expect(functions.fetchUser(user)).not.toBeNull();
  });
});

test('Adds 2 + 2 to equal 4', () => {
  // Complete here
    expect(functions.add(2,2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  // Complete here
    expect(functions.add(2,2)).not.toBe(5);
});

/*
* Informations
*/

// CHECK FOR true & false VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
  // Complete here
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  // Complete here
  //expect(functions.()).toBeFalsy();
});

// toEqual
test('User should be Marc Antoine object', () => {
  // Complete here
    expect(functions.createUser()).toBe('Marc Antoine');
});

// Less than and greater than
test('Should be under or equal 1000', () => {
  const load1 = 500;
  const load2 = 500;
  // Complete here
    expect(functions.add(load1, load2)).toBeLessThanOrEqual(1000);
});

// Regex
test('There is no I in the word team', () => {
  // Complete here
    expect('team').not.toEqual(stringMatching(/i/))
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  // Complete here
  //arrayContaining
    expect(usernames).not.toEqual(
      expect.arrayContaining('admin'),
    );
});

// Working with async data

// Async Await since ES7
//test('User fetched name should be Leanne Graham', async () => {
//  const data = await functions.fetchUser();
  // Complete here
//});
//////////////////////////////////////////

/*
* ReverseString Testing file
*/

const reverseString = require('../src/reversestr');

test('reverseString function exists', () => {
  // Complete here
    expect(reverseString()).toBeDefined();
});

test('String reverses', () => {
  // Complete here
    expect(reverseString.reverse('metro')).toBe('otrem');
});

test('String reverses with uppercase', () => {
  // Complete here
    expect(reverseString.reverse.toLowerCase('cHaPiTeAu')).toBe('uaetipach');
});