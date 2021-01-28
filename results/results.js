import { getUser, clearUser } from '../local-storage-utils.js';
import { userEvil, userAnguish, userLives } from './user-results-data.js';
import { getEvil, getAnguish, getLives } from './user-results-utils.js';

const resultText = document.getElementById('results-text');
const restartButton = document.getElementById('restart-button');

let user = getUser();

const evil = getEvil(user);
console.log(getEvil(user));
const extinguishedLives = getLives(user);
const anguish = getAnguish(user);

const evilText = userEvil[evil];
const extinguishedLivesText = userLives[extinguishedLives];
const anguishText = userAnguish[anguish];

const finalMessage = `You have completed a 20 year career in intergalactic war prevention and mediation. Let's see how you did. 

${evilText} ${anguishText} ${extinguishedLivesText}`;

resultText.textContent = finalMessage;
restartButton.textContent = 'Try again?';

restartButton.addEventListener('click', () =>{
    clearUser();
    window.location = '../';
});