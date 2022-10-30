const challengeServices = require('./use-cases')(
    {
        MONGODB_DATAAPI_APPID: process.env.MONGODB_DATAAPI_APPID,
        MONGODB_DATAAPI_APIKEY: process.env.MONGODB_DATAAPI_APIKEY
    },
    process.env.PROXY_URL
);

module.exports = challengeServices;