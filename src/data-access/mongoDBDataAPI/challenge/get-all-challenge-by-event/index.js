const buildTranslateGetAllChallengeByEventResponse = require('./src/translate-get-all-challenge-by-event-response');
const buildCreateGetAllChallengeByEventRequest = require('./src/create-get-all-challenge-by-event-request');
const buildGetAllChallengeByEvent = require('./src/get-all-challenge-by-event');

module.exports = function(
    APPID,
    APIKEY,
    proxyAgent,
    fetch
)
    {
        const translateGetAllChallengeByEventResponse = buildTranslateGetAllChallengeByEventResponse();
        const createGetAllChallengeByEventRequest = buildCreateGetAllChallengeByEventRequest(
            APIKEY,
            proxyAgent
        );
        const getAllChallengeByEvent = buildGetAllChallengeByEvent(
            APPID,
            fetch,
            createGetAllChallengeByEventRequest,
            translateGetAllChallengeByEventResponse
        );

        return Object.freeze(
            {
                getAllChallengeByEvent
            }
        )
    }