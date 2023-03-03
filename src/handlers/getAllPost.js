import { DynamoDB } from 'aws-sdk';

const dynamoDb = new DynamoDB.DocumentClient();
exports.handler = async (event) => {
  if(event.httpMethod !== 'GET') {
throw new Error(`getAllItems only accept GET method, you tried: ${event.httpMethod}`);
  }
  //console.info('received:', event);
  var params = {
    TableName: process.env.FAQ_TABLE
  };
  const data = await dynamoDb.scan(params).promise();
  const items = data.Items;
  const response = {
    statusCode: 200,
    body: JSON.stringify(items)
  };
  return response;
  //console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
};

