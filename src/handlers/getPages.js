import { DynamoDB } from 'aws-sdk';
const dynamoDb = new DynamoDB.DocumentClient();


exports.handler = async (event) => {
  try {
      const body = JSON.parse(event.body);
    if (body.search) {
      const params = {
        TableName: process.env.FAQ_TABLE,
        IndexName: "GSI3",
        KeyConditionExpression: "#companyId = :companyId",
        FilterExpression: 'contains(#title, :title) OR contains(#subtitle, :subtitle) OR contains(#description, :description)',
        ExpressionAttributeNames: {
          "#title": "title",
          "#subtitle": "subtitle",
          "#description": "description",
          "#companyId": "companyId"
        },
        ExpressionAttributeValues: {
          ":title": body.search,
          ":subtitle": body.search,
          ":description": body.search,
          ":companyId": body.companyId
        },
        Limit: body.limit,
      };
      if (body.paginations) {
        const lastItem = body.paginations;
        params.ExclusiveStartKey = {
          id: lastItem,
          companyId: body.companyId
        };
      }
      const search = await dynamoDb.query(params).promise();
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": '*',
          "Content-Type": 'application/json',
          "Access-Control-Allow-Headers": '*'
        },
        body: JSON.stringify(search)
      };
      return response;
    } else {
      var parameter = {
        TableName: process.env.FAQ_TABLE,
        Limit: body.limit,
        IndexName: "GSI3",
        KeyConditionExpression: "#companyId = :companyId",
        ExpressionAttributeNames: {
          "#companyId": "companyId"
        },
        ExpressionAttributeValues: {
          ":companyId": body.companyId
        }
      };
      if (body.paginations) {
        const lastItem = body.paginations;
        parameter.ExclusiveStartKey = {
          id: lastItem,
          companyId: body.companyId
        };
      }
      const data = await dynamoDb.query(parameter).promise();
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": '*',
          "Content-Type": 'application/json',
          "Access-Control-Allow-Headers": '*'
        },
        body: JSON.stringify(data)
      };
      return response;
    }

  } catch (error) {
    throw error;
  }
};