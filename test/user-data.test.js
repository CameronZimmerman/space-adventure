// IMPORT MODULES under test here:
import { getLives, getEvil, getAnguish } from '../results/user-results-utils.js';

const test = QUnit.test;

const testUser = {
    evil: 0,
    anguish: 0,
    extinguishedLives: 0,
};
// test user evil function
test('based on users evil, return correct assesment key', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected1 = 'good';
    const actual1 = getEvil(testUser);

    testUser.evil = 5;
    const expected2 = 'gray';
    const actual2 = getEvil(testUser);

    testUser.evil = 10;
    const expected3 = 'evil';
    const actual3 = getEvil(testUser);

    testUser.evil = 0;
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual1, expected1);
    expect.deepEqual(actual2, expected2);
    expect.deepEqual(actual3, expected3);

});

// test user anguish function
test('based on users anguish, return correct assesment key', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected1 = 'sane';
    const actual1 = getAnguish(testUser);

    testUser.anguish = 5;
    const expected2 = 'troubled';
    const actual2 = getAnguish(testUser);

    testUser.anguish = 10;
    const expected3 = 'insane';
    const actual3 = getAnguish(testUser);

    testUser.anguish = 0;
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual1, expected1);
    expect.deepEqual(actual2, expected2);
    expect.deepEqual(actual3, expected3);

});

// test user lives function
test('based on users lives, return correct assesment key', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected1 = 'few';
    const actual1 = getLives(testUser);

    testUser.extinguishedLives = 8000000000;
    const expected2 = 'many';
    const actual2 = getLives(testUser);

    testUser.extinguishedLives = 24000000000;
    const expected3 = 'extreme';
    const actual3 = getLives(testUser);

    testUser.extinguishedLives = 0;
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual1, expected1);
    expect.deepEqual(actual2, expected2);
    expect.deepEqual(actual3, expected3);

});
