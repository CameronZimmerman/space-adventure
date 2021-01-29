import disputes from '../dispute-data.js';

export default function renderPlanets(planetUl, user) {
    for (const dispute of disputes) {
        const disputeLinkli = document.createElement('li');
        const disputeImg = document.createElement('img');
        const disputeSpan = document.createElement('span');
        disputeImg.src = `../assets/${dispute.planet}`;
        disputeSpan.textContent = dispute.planetName;
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
            disputeImg.classList.add('complete');
        }  
    }
    return planetUl;
}