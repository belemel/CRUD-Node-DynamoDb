import { DynamoDB } from 'aws-sdk';
import UploadImagesService from "../services/UploadImagesService";
import multer from 'multer'; 
import multerConfig from '../config/multer';

const dynamoDb = new DynamoDB.DocumentClient();
const upload = multer(multerConfig)

exports.handler = async (event, context, callback) => {
   try{
   upload.single('image');
   const uploadImagesService = new UploadImagesService();
   await uploadImagesService.execute();
  
   await dynamoDb.post({
    TableName: process.env.FAQ_TABLE,
    Item: data
   }).promise()
   .then(() => callback(null, response(201, data)))
          .catch((err) => callback(null, response(err.statusCode, err)));
    } catch (error) {
        throw error;
    };
 }  
 
