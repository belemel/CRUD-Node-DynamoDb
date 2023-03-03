import { DynamoDB } from 'aws-sdk';

const dynamoDb = new DynamoDB.DocumentClient();

function response(statusCode, message) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(message),
  };
}

exports.handler = async (event, context, callback) => {
  try {
    const id = event.pathParameters.id;
    const params = {
      Key: { id },
      TableName: process.env.FAQ_TABLE
    };

    await dynamoDb.get(params).promise()
      .then((res) => {
        if (res.Item) callback(null, response(200, res.Item));
        else callback(null, response(404, { message: 'Not found.' }));
      })
      .catch((err) => callback(null, response(err.statusCode, err)));

  } catch (error) {
    throw error;
  };
};

