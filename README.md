# freshness
List pull requests crossing to multiple organizations.

## Setup

```
git clone https://github.com/ringohub/freshness.git
npm i # or yarn install
```

Write configuration file (`config/default.js`).

Change api end-point, organization and github token.
**!! This application perform local only now !!**
If run at a server, then can't stop to expose AccessToken in HTTP requests.
Now, I implementing Auth feature. :bow: :pray:

## Run

```
npm run dev
```

## Test

```
npm test
```
