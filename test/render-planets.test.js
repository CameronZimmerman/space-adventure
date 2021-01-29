import { } from ''; 

const test = QUnit.test;

const testInitialUl = document.createElement('ul');
testInitialUl.id = 'planet-ul';
testInitialUl.classList.add ('textbox');

const testFinalUl = `<ul id="planet-ul" class="textbox"><a href="../dispute/?id=kidnapping"><li style="left: 12%; top: 15%; position: absolute;"><img src="../assets/planet1.png"><span style="position: absolute;">Gumosus</span></li></a><a href="../dispute/?id=war"><li style="left: 22%; top: 53%; position: absolute;"><img src="../assets/planet2.png"><span style="position: absolute;">Virimos</span></li></a><a href="../dispute/?id=inheritance"><li style="left: 62%; top: 10%; position: absolute;"><img src="../assets/planet3.png"><span style="position: absolute;">Ylsa</span></li></a></ul>`;

// test user evil function
test('based on users evil, return correct assesment key', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = testFinalUl;
    const actual = renderPlanets(testInitialUl);
    
    expect.deepEqual(actual, expected);

});