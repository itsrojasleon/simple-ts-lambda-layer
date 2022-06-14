import { APIGatewayProxyHandler } from 'aws-lambda';
import { lambdaResponse, StatusCodes } from 'common';
import { generate } from 'randomstring';

export const handler: APIGatewayProxyHandler = async () => {
  return lambdaResponse(StatusCodes.StatusCreated, {
    msg: `World! You've just created a random message: ${generate()}`
  });
};
