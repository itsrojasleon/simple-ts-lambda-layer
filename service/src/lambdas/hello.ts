import { APIGatewayProxyHandler } from 'aws-lambda';
import { StatusCodes, lambdaResponse } from 'common';
import { generate } from 'randomstring';

export const handler: APIGatewayProxyHandler = async () => {
  return lambdaResponse(
    StatusCodes.StatusOK,
    `HELLO! Here's your random message: ${generate()}`
  );
};
