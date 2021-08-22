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

# Deploy to EC2 with Github Action

- Create new ec2 server and download pem key, open with vscode copy content and save it as SSH_KEY to secrets

- Prepare api deployment environment :
  - install nodejs,npm,nginx,pm2 to your ec2 instance
  - use proxy_pass to route http traffic to your apps port.
  - integrate certbot to automate ssl certification
  - add your ssh key (.ssh/id_rsa.pub) to your github account)
  - copy scripts/deploy.sh to your ec2 server.
  - clone your repository and test deploy script with `sh deploy.sh`

When everyhing is ready your root folder should look like this:

```

your-project-name deploy.sh

```

## Set repository secrets

Go to settins/secrets section and create following secrets

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
