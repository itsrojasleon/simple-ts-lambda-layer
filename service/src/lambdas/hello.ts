import { APIGatewayProxyHandler } from 'aws-lambda';
import { getStoredEnvVariables, lambdaResponse, StatusCodes } from 'common';
import { generate } from 'randomstring';

export const handler: APIGatewayProxyHandler = async () => {
  const { CUSTOM_ENV_ONE, CUSTOM_ENV_TWO } = getStoredEnvVariables();

  return lambdaResponse(StatusCodes.StatusOK, {
    msg: `Random message: ${generate()}`,
    env1: `${CUSTOM_ENV_ONE}`,
    env2: `${CUSTOM_ENV_TWO}`
  });
};
