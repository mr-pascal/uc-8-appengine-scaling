
# Understanding and optimization of Google App Engine's automatic scaling


This repository includes three projects/folders.

## app

The `app` folder contains a very simple `express` Node.js server with a deploy script to deploy it to Google App Engine.

### Run locally

```sh
### Installing dependencies for local development
npm install

### Run server locally
npm run start
```

### Deploy to Google App Engine


```sh
### Deploys the app 'my-app' to Google App Engine
./deploy.sh
```



## loadtest

The `loadtest` folder contains two very simple load test scenarios. The load tests can be started via the NPM commands defined in the `package.json`.

Before running any scripts of this folder make sure that you change the `url` parameter with the value `YOUR_SERVER_URL_HERE` accordingly to the URL of your own Google App Engine.

The NPM start commands are starting a `k6` docker container the corresponding JavaScript file is simply being injected. As such NPM dependencies won't have to be extra installed to make it work.

```sh
### Start 'longRunning.js' script
npm run start:longRunning

### Start 'highCpu.js' script
npm run start:highCpu


### Starting without NPM command
docker run -i loadimpact/k6 run - <highCpu.js
```

## images

This folder contains the screenshots that were taken of the GCP monitoring after running the load tests.
