const USER = 'USER';
export function getUser() {
    const user = JSON.parse(localStorage.getItem(USER) || '[]');

    return user;
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}

export function clearUser() {
    localStorage.setItem(USER, null);
}