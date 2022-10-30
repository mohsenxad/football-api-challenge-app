module.exports = function buildCreateGetAllChallengeByEventRequest
(
    apikey,
    proxyAgent
)
    {
        return function createGetAllChallengeByEventRequest
        (
            eventId
        )
            {
                const query = {
                    "event": {
                        "$oid": eventId,
                    } 
                };

                const headers = {
                    "api-key": apikey,
                    "content-type":"application/json"
                };

                const projection = {}

                const body = JSON.stringify(
                    {
                        collection:"challenges",
                        database:"Football",
                        dataSource:"FootballDB",
                        filter: query,
                        projection:projection
                    }
                );
        
                var options= {
                    method:"POST",
                    headers: headers,
                    body: body
                };
        
                if(proxyAgent){
                    options.agent = proxyAgent;
                }
        
        
                return options;
            }
    }