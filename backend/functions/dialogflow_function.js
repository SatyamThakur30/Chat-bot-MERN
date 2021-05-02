const dialogflow = require("dialogflow");
const uuid = require("uuid");
const config = require("../config/keys");

const projectId = config.googleProjectID;
const sessionId = config.dialogFlowSessionID;
const languageCode = config.dialogFlowSessionLanguageCode;

const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

async function getResponse(query) {
  const sessionId = uuid.v4();

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,

        languageCode: "en-US",
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
 
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
    return result.fulfillmentText
  } else {
    console.log(`  No intent matched.`);
    return false
  }
}

module.exports = getResponse


