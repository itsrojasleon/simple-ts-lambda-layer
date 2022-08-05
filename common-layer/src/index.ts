import { APIGatewayProxyResult } from 'aws-lambda';

export enum StatusCodes {
  StatusOK = 200
}

export const lambdaResponse = (
  statusCode: StatusCodes,
  msg: any
): APIGatewayProxyResult => {
  return {
    statusCode,
    body: JSON.stringify(msg)
  };
};

export const programmingLanguages = [
  'javascript',
  'typescript',
  'go',
  'rust',
  'carbon',
  'html lol'
];
