/**
 * @author Ricardo Maia
 * @license GPLv3+
 *
 * @see https://github.com/octokit/core.js#rest-api-example
 * @see https://docs.github.com/en/free-pro-team@latest/rest/reference/issues#create-a-label
 */

const chalk = require("chalk");
const { Octokit } = require("@octokit/core");
const fs = require("fs");
const ini = require("ini");
const readline = require("readline");
const { exit } = require("process");
const { compute_slots } = require("svelte/internal");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Read local .git/config file
let config = ini.parse(fs.readFileSync("./.git/config", "utf-8"));

// Extract user and repostory names
const regex = /github.com\/(?<username>.*)\/(?<repo>.*)\.git/;
const remote_origin = config['remote "origin"']["url"];
let git_info = regex.exec(remote_origin);
let username = git_info.groups["username"];
let repo = git_info.groups["repo"];

// Display git properties
//console.log("remote_origin: ", remote_origin);

const banner = `
 ██████╗ ██╗  ██╗ ██████╗ ███████╗████████╗
██╔════╝ ██║  ██║██╔═══██╗██╔════╝╚══██╔══╝
██║  ███╗███████║██║   ██║███████╗   ██║   
██║   ██║██╔══██║██║   ██║╚════██║   ██║   
╚██████╔╝██║  ██║╚██████╔╝███████║   ██║   
 ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝   ╚═╝   
                                           
███████╗███████╗████████╗██╗   ██╗██████╗  
██╔════╝██╔════╝╚══██╔══╝██║   ██║██╔══██╗ 
███████╗█████╗     ██║   ██║   ██║██████╔╝ 
╚════██║██╔══╝     ██║   ██║   ██║██╔═══╝  
███████║███████╗   ██║   ╚██████╔╝██║      
╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝   
`;

console.clear();
console.log(banner);

console.log(chalk.yellow("username: "), chalk.blue(username));
console.log(chalk.yellow("repo: "), chalk.blue(repo));

// Await user input for access token
console.log(
  chalk.magenta(
    "Create your access token at https://github.com/settings/tokens"
  )
);

rl.question(chalk.yellow("Personal access token: "), function (token) {
  const octokit = new Octokit({
    auth: token, //"e81c621690bdda37cbc7993c62d6774caa5cd4a2",
  });

  // Get repo labels
  let repo_labels = [];
  let ghost_labels = [
    "statuspage",
    "incident",
    "operational",
    "partial outage",
    "major outage",
    "performance issues",
  ];
  const result = octokit
    .request(`GET /repos/${username}/${repo}/labels`, {
      owner: username,
      repo: repo,
    })
    .then((response) => {
      response.data.forEach((element) => {
        repo_labels.push(element.name);
      });

      // Verify if ghost labels are present in repository
      ghost_labels.forEach((label) => {
        if (repo_labels.includes(label)) {
          console.log(`Label "${chalk.green(label)}" found!`);

          // Create missing labels
        } else {
          console.log(`Label "${chalk.red(label)}" NOT found! Creating...`);

          const result2 = octokit
            .request(`POST /repos/${username}/${repo}/labels`, {
              name: label,
              color: "000000",
              description: "Created by Ghost setup",
            })
            .then((response) => {
              console.log(`Label "${chalk.green(label)}" created!`);
            })
            .catch(function (error) {
              console.log(chalk.red(error.message));
            });
        }
      });
    })
    .catch((error) => {
      console.log(chalk.red(error.message));
    });

  rl.close();
});

// Get user info
/*
  const result = octokit
    .request("/user")
    .then((response) => {
      console.log(chalk.green("User authentication successful!"));
    })
    .catch(function (error) {
      console.log(chalk.red(error.message));
    });
*/
