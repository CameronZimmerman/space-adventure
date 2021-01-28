import { getUser, clearUser } from '../local-storage-utils.js';
import { userEvil, userAnguish, userLives } from './user-results-data.js';
import { getEvil, getAnguish, getLives } from './user-results-utils.js';

const resultText = document.getElementById('results-text');
const restartButton = document.getElementById('restart-button');

let user = getUser();

const evil = getEvil(user);
const extinguishedLives = getLives(user);
const anguish = getAnguish(user);

const evilText = userEvil[evil];
const extinguishedLivesText = userLives[extinguishedLives];
const anguishText = userAnguish[anguish];

const finalMessage = `${evilText} ${anguishText} ${extinguishedLivesText}`;

resultText.textContent = finalMessage;
restartButton.textContent = 'Try again?';

restartButton.addEventListener('click', () =>{
    clearUser();
    window.location = '../';
});