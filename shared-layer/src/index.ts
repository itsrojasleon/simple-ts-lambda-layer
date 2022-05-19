import { APIGatewayProxyResult } from 'aws-lambda';

export enum StatusCodes {
  StatusOK = 200,
  StatusCreated = 201
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

export const getStoredEnvVariables = () => {
  return {
    CUSTOM_ENV_ONE:
      process.env.CUSTOM_ENV_ONE || 'it does not work for CUSTOM_ENV_ONE',
    CUSTOM_ENV_TWO:
      process.env.CUSTOM_ENV_TWO || 'it does not work for CUSTOM_ENV_TWO'
  };
};
