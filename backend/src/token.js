require('dotenv').config();

const createAccessToken = (id, jwt) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { algorithm: 'HS256' });
}

module.exports = {createAccessToken}