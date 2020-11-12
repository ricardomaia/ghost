# Status Page

A status page to host on GitHub pages. Its uses GitHub issues to show the status of your service components and incidents.

Do you like it? Support this project!

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B12LOPH)

<img src="https://github.com/ricardomaia/statuspage/blob/main/screenshot.png" width="600" />

## Demo
https://ricardomaia.github.io/statuspage/

## Get started

_Note that you will need to have [Node.js](https://nodejs.org) installed._

[Clone or fork the repository](https://github.com/ricardomaia/statuspage/fork)

Install the dependencies...

```bash
cd statuspage
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Configuration

Set your `config.json` file like this, replacing `user` and `repo` with your username and repository name.

```json
{
  "user": "ricardomaia",
  "repo": "statuspage",
  "auto_refresh": true,
  "incident_days": 7
}
```

Set `auto_refresh` true or false to enable or disable page update each 60 seconds.

Finally, `incident_days`, defines the number of days in the issues history to be queried.

Create a `.env` file into root directory and set the `PRODUCTION` property `true` or `false` (development mode). Development mode use a local json file instead of connect GitHub API.:

```
PRODUCTION=true
```

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

## Deploying to GitHub Pages

```bash
npm run publish
```
