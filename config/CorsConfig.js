const cors = require('cors');

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'HEAD', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-access-token'],
};

module.exports = () => cors(corsOptions);
