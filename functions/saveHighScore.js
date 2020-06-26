const { table, getHighScores } = require("./utils/airtable");
const {
  getAccessTokenFromHeaders,
  validateAccessToken,
} = require("./utils/auth");

exports.handler = async (event) => {
  const token = getAccessTokenFromHeaders(event.headers);
  const user = await validateAccessToken(token);
  //console.log(event.headers);
  console.log(user);

  if (!user) {
    return {
      statusCode: 403,
      body: JSON.stringify({ err: "Unauthorized" }),
    };
  }
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ err: "That method is not allowed" }),
    };
  }

  const { score } = JSON.parse(event.body);
  const name = user["https://learnbuildtype/username"];
  if (typeof score === "undefined" || !name) {
    return {
      statusCode: 400,
      body: JSON.stringify({ err: "Bad request" }),
    };
  }

  try {
    const records = await getHighScores(false);
    //we've got formatted recodrs in order of scroes highest to lowest
    //the lowest record is at index 9
    const lowestRecord = records[9];
    if (
      typeof lowestRecord.fields.score === "undefined" ||
      score > lowestRecord.fields.score
    ) {
      //update this records with the incoming score
      const updatedRecord = {
        id: lowestRecord.id,
        fields: { name, score },
      };
      await table.update([updatedRecord]);
      return {
        statusCode: 200,
        body: JSON.stringify(updatedRecord),
      };
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify({}),
      };
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: "Faild to save in Airtable." }),
    };
  }
};
