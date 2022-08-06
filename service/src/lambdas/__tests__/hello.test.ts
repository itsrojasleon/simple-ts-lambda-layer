import { APIGatewayProxyResult } from 'aws-lambda';
import { StatusCodes } from 'common-layer';
import { handler } from '../hello';

describe('Hello handler', () => {
  it('returns a successful response', async () => {
    // @ts-ignore
    const response = (await handler()) as APIGatewayProxyResult;

    const body = JSON.parse(response.body);

    const includesProgrammingLanguage =
      body.programmingLanguages.includes('html lol');

    expect(response.statusCode).toBe(StatusCodes.StatusOK);
    expect(includesProgrammingLanguage).toBeTruthy();
    expect(body.randomstring).toBeDefined();
  });
});
