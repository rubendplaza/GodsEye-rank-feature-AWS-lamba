"use strict";

const emojis = ["😒", "😔", "😕", "🙂", "😏", "😁", "🥳", "😎", "🤩"];
const emojiResponse = [
  "So little entries... ",
  "Getting better...",
  "Meh okay...",
  "Keep it up...",
  "Okay now...",
  "Look at all those entries...",
  "What do I do with all these entries...",
  "Entries for days...",
  "Okay AI is kinda scary...",
];

module.exports.rank = async (event) => {
  // grabbing the number of entries from the parameters sent by the client
  const rank = event.queryStringParameters.rank;
  const clippedRank = rank >= emojis.length ? emojis.length - 1 : rank;
  const rankEmoji = emojis[clippedRank];
  const rankResponse = emojiResponse[clippedRank];
  return {
    statusCode: 200,
    // put url of you're front end here
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(
      {
        message: rankResponse,
        input: rankEmoji,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
