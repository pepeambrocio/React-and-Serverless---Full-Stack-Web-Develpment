const { table, getHighScores } = require("./utils/airtable");

exports.handler = async (event) => {
  if (event.httpMehod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ err: "That method is not allowed" }),
    };
  }

  const { score, name } = JSON.parse(event.body);
  if (!score || !name) {
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
      await table.update({ updatedRecord });
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
