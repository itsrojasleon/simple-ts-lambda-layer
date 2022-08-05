import { APIGatewayProxyHandler } from 'aws-lambda';
import {
  lambdaResponse,
  programmingLanguages,
  StatusCodes
} from 'common-layer';
// This package will be available once we're in aws because it is installed within
// the common layer. Make sure to install it if we're in development as a dev dependency.
import randomstring from 'randomstring';

export const handler: APIGatewayProxyHandler = async () => {
  return lambdaResponse(StatusCodes.StatusOK, {
    programmingLanguages: programmingLanguages.join(', '),
    randomstring: randomstring.generate()
  });
};
