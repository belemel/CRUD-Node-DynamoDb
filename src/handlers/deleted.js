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
        Key: {
            id,
        },
        TableName: process.env.FAQ_TABLE,
    };
    await dynamoDb.delete(params).promise()
      .then(() =>
        callback(null, response(200, { message: 'deleted success' })))
        .catch((err) => callback(null, response(err.statusCode, err)));
} catch (error) {
    throw error;
};
};