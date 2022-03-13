import { APIGatewayProxyHandler } from 'aws-lambda';
import { StatusCodes, lambdaResponse } from 'common';
import { generate } from 'randomstring';

export const handler: APIGatewayProxyHandler = async () => {
  return lambdaResponse(
    StatusCodes.StatusCreated,
    `World! You've just created a random message: ${generate()}`
  );
};
