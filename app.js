// import functions and grab DOM elements
import { getUser, setUser } from './local-storage-utils.js';

const userFormElement = document.getElementById('user-form');

// set event listeners to update state and DOM
userFormElement.addEventListener('submit', (e) =>{
    const formData = new FormData(userFormElement);
    e.preventDefault();
    const user = {
        name: formData.get('name'), 
        occupation: formData.get('occupation'),
        extinguishedLives:0,
        planetsSaved:0,
        anguish:0,
    };
    setUser(user);
    window.location = './solar-system';
});