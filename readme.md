# TS lambda layer

A simple example using lambda layers with NodeJS (Typescript).

## Install dependencies

```shell
# If using pnpm
cd services && pnpm i

# If using npm
cd services && npm i
```

## Run project locally

```shell
# If using pnpm
cd service && pnpm run dev

# If using npm
cd service && npm run dev
```

## Run tests

```shell
# If using pnpm
cd service && pnpm run test

# If using npm
cd service && npm run test
```

## Getting ready for production

- Set AWS environment variables

```shell
# You can put them in the shell context so there are available
# before running any command at your terminal.
export AWS_ACCESS_KEY_ID="write_here"
export AWS_SECRET_ACCESS_KEY="write_here"
```

- Create an `.env` file within the `service` directory and populate it with following values:

```shell
# ./services/.env

AWS_REGION=us-east-1
AWS_ACCOUNT_ID=write_here
```

- Deploy the lambda layer

```shell
cd common-layer && pnpm run deploy
```

- Deploy the lambda function

```shell
cd service && pnpm run deploy
```

And that's it. Super simple.
