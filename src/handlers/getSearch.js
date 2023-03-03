import { DynamoDB } from 'aws-sdk';

const dynamoDb = new DynamoDB.DocumentClient();
/*function response(statusCode, message){
  return {
   statusCode: statusCode,
   body: JSON.stringify(message),
  };
}*/
exports.handler = async (event) => {
  try{
    const string = event.pathParameters.string;
    const body = JSON.parse(event.body);
    let params = {
    TableName: process.env.FAQ_TABLE,
    IndexName: "GSI3",
    FilterExpression: 'contains(#title, :title) OR contains(#subtitle, :subtitle) OR contains(#description, :description)',
    KeyConditionExpression: "#companyId = :companyId",
    ExpressionAttributeNames: {
      "#title": "title",
      "#subtitle": "subtitle",
      "#description": "description",
      "#companyId": "companyId"
    },
    ExpressionAttributeValues: {
        ":title": string,
        ":subtitle": string,
        ":description": string,
        ":companyId": body.companyId
    }
  };
  const search = await dynamoDb.query(params).promise();
  const items = search.Items;
  const response = {
    statusCode: 200,
    body: JSON.stringify(items),
    headers: {
      "Access-Control-Allow-Origin": '*',
      "Content-Type": 'application/json',
      "Access-Control-Allow-Headers": '*'
    }
  };
  return response;
  } catch (error) {
    throw error;
  }
  //console.info('received:', event);

  /*const search = await dynamoDb.query(params).promise();
  const items = search.Items;
  const response = {
    statusCode: 200,
    body: JSON.stringify(items)
  };
  return response; */
  //console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
};

