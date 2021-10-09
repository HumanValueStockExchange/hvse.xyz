# HVSE [HVSE, Ͱ]

[![Discord](https://img.shields.io/discord/714888181740339261?color=1C1CE1&label=hvse%20%7C%20Discord%20%F0%9F%91%8B%20&style=flat-square)](https://discord.gg/n4rRamkGuU)
[![Twitter Follow](https://img.shields.io/twitter/follow/hvse.svg?style=social)](https://twitter.com/HVSE_Foundation)
 
<h1 align="center" style="margin-top: 1em; margin-bottom: 3em;">
  <p><a href="https://hvse.xyz"><img alt="hvse logo" src="./logo.png" alt="hvse.xyz" width="125"></a></p>
  <p>👋 Welcome to hvse.xyz!</p>
</h1>


# Identity

This is the repo for the [hvse.xyz](https://hvse.xyz) website, a resource for the HVSE community. Here is the others:

- [Whitepaper](?)

- [Twitter](https://twitter.com/HVSE_Foundation)

- [Official subreddit](https://www.reddit.com/r/hvse/)

- [Discord](https://discord.gg/n4rRamkGuU)

- Contact : hvse.info@protonmail.com

[hvse.xyz](https://hvse.xyz) is improved and changed over time through the contributions of community members who submit content, give feedback, or volunteer their time to managing its evolution. If you’re interested in helping to improve [hvse.xyz](https://hvse.xyz), find out [how to contribute]()

## License

HVSE website is released under the terms of the MIT license. See [LICENSE](https://github.com/edlansiaux/HVSECOIN/blob/main/LICENSE) more information or see [opensource.org](https://opensource.org/licenses/MIT).

## Looking for the HVSE blockchain's code?

If you're looking for the HVSE blockchain itself, there is no single repo. Instead, HVSE has multiple implementations of the protocol written in different programming languages for security and diversity. [Check out the different implementations]()

<hr style="margin-top: 3em; margin-bottom: 3em;">

# Development and contributions

Development is ongoing, and the development team, as well as other volunteers, can freely work in their own trees and submit pull requests when features or bug fixes are ready.

## How updates are made to hvse.xyz:

### Submit an issue

- Create a [new issue](https://github.com/HumanValueStockExchange/hvse.xyz/issues/new/choose).
- Comment on the issue (if you'd like to be assigned to it) - that way [our team can assign the issue to you](https://github.blog/2019-06-25-assign-issues-to-issue-commenters/).

### Fork the repository (repo)

- If you're not sure, here's how to [fork the repo](https://help.github.com/en/articles/fork-a-repo).

### Set up your local environment (optional)

If you're ready to contribute and create your PR, it will help to set up a local environment so you can see your changes.

1. [Set up your development environment](https://www.gatsbyjs.com/docs/tutorial/part-zero/)

2. Clone your fork

If this is your first time forking our repo, this is all you need to do for this step:

```
$ git clone git@github.com:[your_github_handle]/hvse.xyz.git && cd hvse.xyz
```

If you've already forked the repo, you'll want to ensure your fork is configured and that it's up to date. This will save you the headache of potential merge conflicts.

To [configure your fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork):

```
$ git remote add upstream https://github.com/HumanValueStockExchange/hvse.xyz.git
```

To [sync your fork with the latest changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork):

```
$ git checkout dev
$ git fetch upstream
$ git merge upstream/dev
```

3. Install dependencies

```
$ yarn
```

4. Add personal GitHub API token (free)

We recommend setting this up when running the project locally, as we use the GitHub API to fetch repository data for many projects & files.

> - [Follow these instructions](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) to create a personal GitHub API token
>   - When selecting scopes in step 7, leave everything unchecked (the data we fetch doesn't require any [scope](https://docs.github.com/en/developers/apps/scopes-for-oauth-apps#available-scopes))
> - In local repo root directory: Make a copy of `.env.example` and name it `.env`
> - Copy & paste your new GitHub API token into `.env`

```
// .env Example:
GATSBY_GITHUB_TOKEN_READ_ONLY=48f84de812090000demo00000000697cf6e6a059
```

### Make awesome changes!

1. Create new branch for your changes

```
$ git checkout -b new_branch_name
```

2. Start developing!

```
$ yarn start
```

- Open this directory in your favorite text editor / IDE, and see your changes live by visiting `localhost:8000` from your browser
- Pro Tip: Explore scripts within `package.json` for more build options

3. Commit and prepare for pull request (PR). In your PR commit message, reference the issue it resolves (see [how to link a commit message to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)).

```
$ git commit -m "brief description of changes [Fixes #1234]"
```

4. Push to your GitHub account

```
$ git push
```

### Submit your PR

- After your changes are commited to your GitHub fork, submit a pull request (PR) to the `dev` branch of the `HumanValueStockExchange/hvse.xyz` repo
- In your PR description, reference the issue it resolves (see [linking a pull request to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword))
  - ex. `Updates out of date content [Fixes #1234]`
- Why not say hi and draw attention to your PR in [our discord server](https://discord.gg/n4rRamkGuU)?

### Wait for review

- The website team reviews every PR
- Acceptable PRs will be approved & merged into the `dev` branch

### Release

- `master` is continually synced and will automatically deploy new commits to hvse.xyz
- The website team will periodically merge `dev` into `master` (typically multiple times per week)
- You can [view the history of releases](https://github.com/HumanValueStockExchange/hvse.xyz/releases), which include PR highlights
