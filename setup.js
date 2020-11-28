const { Octokit } = require("@octokit/core");

var fs = require("fs"),
  ini = require("ini");

var config = ini.parse(fs.readFileSync("./.git/config", "utf-8"));

console.log(config['remote "origin"']["url"]);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.write("Create your access token at https://github.com/settings/tokens\n");

rl.question("Username: ", function (username) {
  rl.question("Personal access token: ", function (token) {
    const octokit = new Octokit({
      auth: token, //"b8ae2aad0d7560eb8d94f69d48f8bb8049a78a48",
    });

    // Get user data
    const result = octokit.request("/user");

    //let labels = getLabels(api);

    result.then((response) => {
      console.log(response.data);
    });

    //console.log(`Username: ${username} and token: ${token}`);

    rl.close();
  });
});

/**
 * https://github.com/octokit/core.js#rest-api-example
 * https://docs.github.com/en/free-pro-team@latest/rest/reference/issues#create-a-label
 */

// Authentication
function auth(token) {
  const octokit = new Octokit({
    auth: token, //"b8ae2aad0d7560eb8d94f69d48f8bb8049a78a48",
  });
  return octokit;
}

// List labels
async function getLabels(api) {
  const result = api.request("GET /repos/ricardomaia/statuspage/labels", {
    owner: "ricardomaia",
    repo: "statuspage",
  });

  result.then((response) => {
    return response.data;
  });
}

// Create a label
function createLabels(api) {
  const result = api.request("POST /repos/{owner}/{repo}/labels", {
    owner: "octocat",
    repo: "hello-world",
    name: "name",
  });

  result.then((response) => {
    console.log(response.data);
  });
}
