
export function getEvil(user) {
    if (user.evil <= 3) return 'good';

    if (user.evil >= 4 && user.evil < 8) return 'gray';

    if (user.evil >= 8) return 'evil';
}

export function getAnguish(user) {
    if (user.anguish <= 2) return 'sane';

    if (user.anguish > 2 && user.anguish < 8) return 'troubled';

    if (user.anguish >= 8) return 'insane';
}

export function getLives(user) {
    if (user.extinguishedLives <= 30000) return 'few';

    if (user.extinguishedLives > 2 && user.extinguishedLives < 16000000000) return 'many';

    if (user.extinguishedLives >= 16000000000) return 'extreme';
}