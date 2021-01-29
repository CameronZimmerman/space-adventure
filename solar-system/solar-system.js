import { getUser } from '../local-storage-utils.js';
import disputes from '../dispute-data.js';
import renderPlanets from './render-planets.js';
const user = getUser();

const planetUl = document.getElementById('planet-ul');
const userLivesSpan = document.getElementById('user-lives');
const userEvilSpan = document.getElementById('user-evil');
const userAnguishSpan = document.getElementById('user-anguish');

let finishedGame = true;

for (let dispute of disputes) {
    if (!user.completed[dispute.id]) finishedGame = false;
}

if (finishedGame || user.anguish >= 10) {
    window.location = '../results';
}

userLivesSpan.textContent = `you have extinguished ${user.extinguishedLives} lives`;
userAnguishSpan.textContent = `Anguish: ${user.anguish}`;
userEvilSpan.textContent = `Evil: ${user.evil}`;

renderPlanets(planetUl, user);




