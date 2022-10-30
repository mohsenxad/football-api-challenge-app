module.exports = function buildGetAllChallengeByEvent
(
    dataAccess
)
    {
        return async function getAllChallengeByEvent
        (
            eventId
        )
            {
                const challengeList = await dataAccess.dataApi.getAllChallengeByEvent(
                    eventId
                );
                return challengeList;
            }
    }