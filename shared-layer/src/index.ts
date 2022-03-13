import { APIGatewayProxyResult } from 'aws-lambda';

export enum StatusCodes {
  StatusOK = 200,
  StatusCreated = 201
}

/**
 * Generic lambda response
 * @param statusCode HTTP method
 * @param msg Message could be any javascript data structure
 */
export const lambdaResponse = (
  statusCode: StatusCodes,
  msg: any
): APIGatewayProxyResult => {
  return {
    statusCode,
    body: JSON.stringify(msg)
  };
};
