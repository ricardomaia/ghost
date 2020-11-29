# Ghost - Github Hosted Status Page

A status page to host on GitHub pages. Its uses GitHub issues to show the status of your service components and incidents.

Do you like it? Support this project!

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B12LOPH)

<img src="https://github.com/ricardomaia/statuspage/blob/main/screenshot.png" width="600" />

## Demo

https://ricardomaia.github.io/statuspage/

## Get started

_Note that you must have [Node.js](https://nodejs.org) and [Git](https://git-scm.com/downloads) installed on your computer_ and a [GitHub](https://github.com/join) account.

[Fork the repository](https://github.com/ricardomaia/statuspage/fork). Click on the right top button of respository page.

<a href="https://github.com/ricardomaia/statuspage/fork"><img src="https://github-images.s3.amazonaws.com/help/bootcamp/Bootcamp-Fork.png" width="300" alt="Fork Button" /></a>

Now clone your forked repository on your computer. On terminal type:

```terminal
git clone https://github.com/[your_username]/statuspage.git
```

Install the dependencies...

```bash
cd statuspage
npm install
```

## Setup

Ghost provides a console script to create all required label on your repository. But first you need set a **personal access token**. Go to https://github.com/settings/tokens and click on button "Generate new token". On the "Note" input field give an friendly name like "ghost" and check the options:

- repo:status
- repo_deployment and
- public_repo

So click in the "Generate token". You will see a string like `23ffabb27cb569eeb3da9599ac61608511477046`. Save it to later!

```bash
node setup.js
```

Paste your generated token.

<img src="https://github.com/ricardomaia/statuspage/blob/main/setup.png" width="600" />

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
  "incident_days": 365
}
```

Set `auto_refresh` true or false to enable or disable page update each 60 seconds.

Finally, `incident_days`, defines the number of days in the issues history to be queried.

⚠️ Development mode uses a local json file instead of connect GitHub API.

## Building and running in production mode

To create an optimised (production) version of the app:

```bash
npm run build
```

And run it:

```bash
npm run start
```

⚠️ The production mode uses the settings in your `config.json` file and connects to the GitHub API.

## Deploying to GitHub Pages

The command below compiles a production version and push to gh-pages branch of your repository.

```bash
npm run publish
```
