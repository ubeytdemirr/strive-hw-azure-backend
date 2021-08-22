# Express-Typescript-Starter

<a href="https://github.com/ubeytdemirr/express-typescript-starter/generate">Click here or use template button to create new project </a>

## Install dependencies

`npm install`

## Add the environment variables

- create env folder in root directory
- create development.env and production.env files

```
#----------------------- APP ----------------------------#
NODE_ENV=development

PORT=5000

FRONTEND_PRODUCTION=http://localhost:3000

FRONTEND_DEV=http://localhost:3000

#----------------------- AWS ----------------------------#

AWS_ACCESS_KEY=AWS_ACCESS_KEY
AWS_SECRET_ACCESS_KEY=AWS_SECRET_ACCESS_KEY

```

## Run the app in development mode

`npm run dev`

## Test the app

`npm run test`

## Build the app for production

`npm run build`

## Set repository secrets

Go to <a href="settings/secrets/actions">secrets</a> section and create following secrets

```

- AWS_SG_NAME : AWS Security Group Name

- AWS_ACCESS_KEY_ID : AWS Access Key ID

- AWS_SECRET_ACCESS_KEY : AWS Secret Access Key

- AWS_DEFAULT_REGION : AWS Default Region

- HOST : Hostname

- SSH_KEY : Your Private KEY (must match with public key under .ssh/authorized_keys)

- SLACK_CHANNEL : Slack Channel to notify

- SLACK_USERNAME : Slack Username to notify

- SLACK_WEBHOOK : Slack webhook


```
