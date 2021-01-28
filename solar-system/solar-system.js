import { getUser } from '../local-storage-utils.js';
import disputes from '../dispute-data.js';

const user = getUser();

const planetUl = document.getElementById('planet-ul');

let finishedGame = true;

for (let dispute of disputes) {
    if (!user.completed[dispute.id]) finishedGame = false;
}

if (finishedGame || user.anguish >= 10) {
    window.location = '../results';
}

for (const dispute of disputes) {
    const disputeLinkli = document.createElement('li');
    const disputeImg = document.createElement('img');
    const disputeSpan = document.createElement('span');
    disputeImg.src = `../assets/${dispute.planet}`;
    disputeSpan.textContent = dispute.title;
    disputeSpan.style.position = 'absolute';

    disputeLinkli.append(disputeImg, disputeSpan);
    disputeLinkli.style.left = `${dispute.left}%`;
    disputeLinkli.style.top = `${dispute.top}%`;
    disputeLinkli.style.position = 'absolute';

    if (user.completed[dispute.id] === undefined){
        const disputeLinkA = document.createElement('a');
        disputeLinkA.href = `../dispute/?id=${dispute.id}`;
        disputeLinkA.append(disputeLinkli);
        planetUl.append(disputeLinkA);
    }
    else {
        planetUl.append(disputeLinkli);
        disputeImg.classList.add('comp;ete');
    }  
}




