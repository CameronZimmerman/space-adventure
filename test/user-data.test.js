// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

const testUser = {
    evil: 0,
    anguish: 0,
    livesExtinguished: 0,
};
// test user evil function
test('based on users evil, return correct assesment key', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected1 = 'good';
    const actual1 = getEvil(testUser.evil);

    testUser.evil = 5;
    const expected2 = 'gray';
    const actual2 = getEvil(testUser.evil);

    testUser.evil = 10;
    const expected3 = 'evil';
    const actual3 = getEvil(testUser.evil);

    testUser.evil = 0;
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);

});

// test user anguish function
test('based on users anguish, return correct assesment key', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected1 = 'sane';
    const actual1 = getAnguish(testUser.anguish);

    testUser.anguish = 5;
    const expected2 = 'troubled';
    const actual2 = getAnguish(testUser.anguish);

    testUser.anguish = 10;
    const expected3 = 'insane';
    const actual3 = getAnguish(testUser.anguish);

    testUser.anguish = 0;
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);

});

// test user lives function
test('based on users anguish, return correct assesment key', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected1 = 'few';
    const actual1 = getLives(testUser.livesExtinguished);

    testUser.livesExtinguished = 5;
    const expected2 = 'many';
    const actual2 = getLives(testUser.livesExtinguished);

    testUser.livesExtinguished = 10;
    const expected3 = 'extreme';
    const actual3 = getLives(testUser.livesExtinguished);

    testUser.livesExtinguished = 0;
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);

});
