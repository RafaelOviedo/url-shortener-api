const crypto = require('crypto');

const NUM_CHARS_SHORT_LINK = 7;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const ALPHABET_LENGTH = ALPHABET.length;

function generateRandomShortUrl() {
    let result = new Array(NUM_CHARS_SHORT_LINK);
    
    while (true) {
        for (let i = 0; i < NUM_CHARS_SHORT_LINK; i++) {
            let randomIndex = crypto.randomInt(ALPHABET_LENGTH);
            result[i] = ALPHABET.charAt(randomIndex);
        }
        let shortLink = result.join('');
        
        return shortLink;
    }
}

module.exports = { generateRandomShortUrl };