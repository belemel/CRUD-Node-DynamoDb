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
    const body = JSON.parse(event.body);
    const id = event.pathParameters.id;
    /*const dateTime = new Date();
    const dateTime2 = new Date(dateTime.valueOf() - dateTime.getTimezoneOffset() * 60000);
    const localDateTime = dateTime2.toISOString().replace(/.\d{3}$/, '');*/
    /*const getParams = {
      Key: { id },
      TableName: process.env.FAQ_TABLE,
    };*/

    /*const isFavorited = await dynamoDb.get(getParams).promise(); */

    /*if (isFavorited.Item.isFavorite === 0) { */

      const params = {
        Key: { id },
        TableName: process.env.FAQ_TABLE,
        UpdateExpression: 'SET title = :title, subtitle = :subtitle, description = :description',
        ExpressionAttributeValues: {
          ':title': body.title,
          ':subtitle': body.subtitle,
          ':description': body.description
        },
        ReturnValues: "ALL_NEW"
      };

      await dynamoDb.update(params).promise()
        .then(() =>
          callback(null, response(200, { message: 'Alteração Realizada' })))
        .catch((err) => callback(null, response(err.statusCode, err)));
    /*} */

   /* if (isFavorited.Item.isFavorite === 1) {

      const params = {
        Key: { id },
        TableName: process.env.FAVORITES_TABLE,
        UpdateExpression: 'SET isFavorite = :isFavorite, updatedAt = :updatedAt',
        ExpressionAttributeValues: {
          ':isFavorite': 0,
          ':updatedAt': localDateTime,
        },
        ReturnValues: "ALL_NEW"
      };

      await dynamoDb.update(params).promise()
        .then(() =>
          callback(null, response(200, { message: 'Transaction unfavorited.' })))
        .catch((err) => callback(null, response(err.statusCode, err)));
    } */
  } catch (error) {
    throw error;
  };
};

