import { APIGatewayProxyHandler } from 'aws-lambda';
import { generate } from 'randomstring';
import { StatusCodes, lambdaResponse, getStoredEnvVariables } from 'common';

export const handler: APIGatewayProxyHandler = async () => {
  const { CUSTOM_ENV_ONE, CUSTOM_ENV_TWO } = getStoredEnvVariables();
  const response = `Random message: ${generate()}, env vars: ${CUSTOM_ENV_ONE} ${CUSTOM_ENV_TWO}`;

  return lambdaResponse(StatusCodes.StatusOK, response);
};
