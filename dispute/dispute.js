import findById from '../utils.js';
import disputes from '../dispute-data.js';
import { getUser, setUser } from '../local-storage-utils.js';

const user = getUser();

//const body = document.querySelector('body');
const disputeHeading = document.getElementById('dispute-heading');
const disputeImgHeading = document.getElementById('dispute-img-heading');
const disputeImg = document.getElementById('dispute-img');
const disputeText = document.getElementById('dispute-text');
const disputeChoices = document.getElementById('dispute-choices');

const params = new URLSearchParams(window.location.search);

const disputeId = params.get('id');

const dispute = findById(disputeId, disputes);

disputeHeading.textContent = dispute.title;
disputeImgHeading.textContent = dispute.leaderName;
disputeImg.src = `../assets/${dispute.leader}`;
disputeText.textContent = dispute.description;

for (const option of dispute.options) {
    const choiceLabel = document.createElement('label');
    const choiceInput = document.createElement('input');
    choiceLabel.textContent = option.text;
    
    choiceInput.type = 'radio';
    choiceInput.name = 'choice';
    choiceInput.value = option.id;
    choiceLabel.append(choiceInput);
    disputeChoices.append(choiceLabel);
}

const chooseButton = document.createElement('button');
chooseButton.textContent = 'choose';

disputeChoices.append(chooseButton);

disputeChoices.addEventListener('submit', (e) =>{
    const formData = new FormData(disputeChoices);

    e.preventDefault();

    const optionId = formData.get('choice');
    const option = findById(optionId, dispute.options);
    user.anguish += option.anguish;
    user.evil += option.evil;
    user.extinguishedLives += option.extinguishedLives;
    user.completed[disputeId] = true;
    setUser(user);
    alert(`${option.result}... you extinguished ${option.extinguishedLives} lives`);

    window.location = '../solar-system';
    
});