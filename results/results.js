import { getUser, clearUser } from '../local-storage-utils.js';
import { userEvil, userAnguish, userLives, userOccupation } from './user-results-data.js';
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
const occupationText = userOccupation[user.occupation] || 'you were undecided in career and this reflects in your decisions,';

const finalMessage = `${user.name}...${evilText} ${occupationText} ${anguishText} ${extinguishedLivesText}`;

resultText.textContent = finalMessage;
restartButton.textContent = 'Try again?';

restartButton.addEventListener('click', () =>{
    clearUser();
    window.location = '../';
});