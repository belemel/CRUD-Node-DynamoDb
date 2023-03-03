import { DynamoDB } from 'aws-sdk';
import { ulid } from 'ulid';


const dynamoDb = new DynamoDB.DocumentClient();

function response(statusCode, message){
   return {
    statusCode: statusCode,
    body: JSON.stringify(message),
   };
}

exports.handler = async (event, context, callback) => {
    try {
        const body = JSON.parse(event.body);
        const dateTime = new Date();
        const dateTime2 = new Date(dateTime.valueOf() - dateTime.getTimezoneOffset() * 60000);
        const localDateTime = dateTime2.toISOString().replace(/.\d{3}$/, '');
        const date = dateTime2.toISOString().substring(0, 10);
        const data = {
            id: ulid(),
            createdAt: localDateTime,
            updatedAt: localDateTime,
            date: date,
            title: body.title,
            subtitle: body.subtitle,
            description: body.description,
            companyId: body.companyId
        };
        await dynamoDb.put({
            TableName: process.env.FAQ_TABLE,
            Item: data,
        }).promise()
          .then(() => callback(null, response(201, data)))
          .catch((err) => callback(null, response(err.statusCode, err)));
    } catch (error) {
        throw error;
    };
};