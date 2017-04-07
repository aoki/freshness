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

### Environment Variables

| Key                        | Description                                                                                                                                                 | Default                  |
|:---------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|
| FRESHNESS_GITHUB_API_URL   | Specify GitHub or GitHub:Enterprise API URL                                                                                                                 | `https://api.github.com` |
| FRESHNESS_GITHUB_API_TOKEN | Specify GitHub personal access token (**Require**: [Generate here](https://github.com/settings/tokens)). Need `repo:status` and ` public_repo` permissions. |                          |
| FRESHNESS_TARGET_ORGS      | Specify GitHub organizations for listing pull requests                                                                                                      | `github,nodejs`          |



## Test

```
npm test
```
