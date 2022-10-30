module.exports = function buildGetAllChallengeByEvent
(
    APPID,
    fetch,
    createGetAllChallengeByEventRequest,
    translateGetAllChallengeByEventResponse
)
    {
        return async function getAllChallengeByEvent
        (
            eventId
        )
            {
                const options = createGetAllChallengeByEventRequest(
                    eventId
                );
        
                const url = `https://data.mongodb-api.com/app/${APPID}/endpoint/data/v1/action/find`;
                
                const request = await fetch(
                    url,
                    options
                );
        
                const response = await request.json();

                const challengeList = translateGetAllChallengeByEventResponse(
                    response
                );

                return challengeList;
            }
    }