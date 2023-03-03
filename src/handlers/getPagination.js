import { DynamoDB } from 'aws-sdk';

const dynamoDb = new DynamoDB.DocumentClient();
/*
function response(statusCode, message){
   return {
    statusCode: statusCode,
    body: JSON.stringify(message),
   };
}
*/
exports.handler = async (event, context, callback) => {
   try{
      const body = JSON.parse(event.body);
      const limit = event.pathParameters.number;
      const params = {
         TableName: process.env.FAQ_TABLE,
         Limit: limit
      };
      if (body.paginations) {
         const lastItem = body.paginations;
         params.ExclusiveStartKey = { id: lastItem };
      }
      let response = await dynamoDb.scan(params).promise();
      const retorno = {
         items: response.Items,
         lastItem: response.LastEvaluatedKey
      };
      return {
         statusCode: 200,
         body: JSON.stringify(retorno),
         headers: {
            "Access-Control-Allow-Origin": '*',
            "Content-Type": 'application/json',
            "Access-Control-Allow-Headers": '*'
          }
        };
   } catch (error) {
      throw error;
   }
  };