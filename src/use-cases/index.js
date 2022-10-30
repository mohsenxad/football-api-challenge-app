const buildGetAllChallengeByEvent = require('./get-all-challenge-by-event');
// const buildGetAllEventByUser = require('./get-all-event-by-user');

module.exports = function(
    {
        MONGODB_DATAAPI_APPID,
        MONGODB_DATAAPI_APIKEY
    },
    proxyUrl
)
    {
        const dataAccess = require('../data-access')(
            {
                MONGODB_DATAAPI_APPID,
                MONGODB_DATAAPI_APIKEY
            },
            proxyUrl
        );

        const getAllChallengeByEvent = buildGetAllChallengeByEvent(dataAccess);
        // const getAllEventByUser = buildGetAllEventByUser(dataAccess);
        

        const services =  Object.freeze(
            {
                getAllChallengeByEvent,
                // getAllEventByUser
            }
        );

        return services;
    }