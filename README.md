# Browserslist Average Usage

[![npm](https://img.shields.io/npm/v/@theholocron/browserslist-average-usage?color=red)](https://www.npmjs.com/package/@theholocron/browserslist-average-usage) [![Build Status](https://github.com/the-holocron/browserslist-average-usage/workflows/CI/badge.svg)](https://github.com/the-holocron/browserslist-average-usage/actions?workflow=CI) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=the-holocron/browserslist-average-usage)](https://dependabot.com)

A command-line client that calculates the median level of browser usage based on custom stats in order to take advantage of [Browserslist custom usage](https://github.com/browserslist/browserslist#custom-usage-data) feature. 

When building out custom usage data, often times the statistics you'll receive from Google Analytics will have browsers and/or versions with zeros. This makes finding a median to use for the `in my stats` query a bit difficult, since those numbers will deflate your actual audiences.  This tool will take in a `browserslist-stats.json` and return a percentage that is the median number of usage.

## Installation

```bash
npm install --save @theholocron/browserslist-average-usage
```

## Table of Contents

* [Usage](#usage)
* [Changelog](#how-we-track-changes)
* [Versioning](#how-we-version)
* [Contribution](#how-to-contribute)
* [Tools](#tools-we-use)
* [Support](#where-to-find-suport)
* [License](#license)

## Usage

Run the `--help` or `-h` command to find out how to use the command.

```
$ browserslist-average-usage --help
Usage: browserslist-average-usage [options]

Options:
  -w, --write      Write to a browserslistrc.json file    [boolean]
  --verbose        Turn on the logging                    [boolean]
  -h, --help       Show help                              [boolean]
  -v, --version    Show version number                    [boolean]

Commands:
  browserslist-average-usage                   Calculates the median level of browser usage based on custom      [aliases: get get-average] [default]
                                               stats in order to take advantage of Browserslist custom usage
  browserslist-average-usage write [source]    Writes to a source of ones choosing of where to store the         [aliases: write-file] 
                                               average usage statistics

Examples:
  browserslist-average-usage

© 2020 The Holocron. All rights reserved.
```

### Input

At this time, the client does not accept any input.

### Return

If the command succeeds, it will exit with a 0 code and the average percentage of browsers (e.g. `0.03030739465585173`). Otherwise, it will exit with 1 code and an error message.

### Commands

#### `get`

This is the default command and doesn't require that you add `get`, as its only an alias. Looks for a `browserlist-stats.json` file at the root of the library or code and calculates the average, then outputs to `stdout`.

#### `write [source]`

Grabs the average and writes the statistics to a source using the string `<percentage> in my stats`.  If the stats exist in the source, then it will update the value with the new statistics.

The source can be one of two types: `package` or `config`.  For the package option, it will create or update the `browserslist` key within the `package.json`.  For the config option, it will create or update a `browserslistrc.json` file for use within [Browserslist shareable configs](https://github.com/browserslist/browserslist#shareable-configs) option.

## How We Track Changes [![Keep a Changelog](https://img.shields.io/badge/Keep%20a%20Changelog-1.0.0-orange)](https://keepachangelog.com/en/1.0.0/)

This project uses a [CHANGELOG](./CHANGELOG.md) and [GitHub releases](https://help.github.com/en/github/administering-a-repository/about-releases) which contains a curated, chronologically ordered list of notable changes for each version of a project. [Read more about changelogs](https://keepachangelog.com/en/1.0.0/).

## How We Version [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

We use [SemVer](https://semver.org/) for its versioning providing us an opt-in approach to releases. This means we add a version number according to the spec, as you see below. So rather than force developers to consume the latest and greatest, they can choose which version to consume and test any newer ones before upgrading. Please the read the spec as it goes into further detail.

Given a version number **MAJOR.MINOR.PATCH**, increment the:

* **MAJOR** version when you make incompatible API changes.
* **MINOR** version when you add functionality in a backward-compatible manner.
* **PATCH** version when you make backward-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the **MAJOR.MINOR.PATCH** format.

## How to Contribute [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Have a bug or a feature request? Looking to contribute to advance the project? Read our [contribution guide](./github/CONTRIBUTING.md) or [maintenance guide](./.github/MAINTAINING.md) first in order to understand how we do things around here. Or you could look at some of our other guides below:

<details>
  <summary><strong>How do I…</strong> (click to expand)</summary>

* [Ask or Say Something?](./.github/SUPPORT.md)
  * [Request Support](./.github/SUPPORT.md#request-support)
  * [Report an Error or Bug](./.github/SUPPORT.md#report-an-error-or-bug)
  * [Request a Feature](./.github/SUPPORT.md#request-a-feature)
* [Make Something?](./.github/CONTRIBUTING.md)
  * [Setup the Project](./.github/CONTRIBUTING.md#get-started)
  * [Create an Issue](./.github/CONTRIBUTING.md#creating-a-good-issue)
  * [Create a Feature Request](./.github/CONTRIBUTING.md#create-a-good-feature-request)
  * [Contribute Documentation](./.github/CONTRIBUTING.md#contribute-to-documentation)
  * [Contribute Code](./.github/CONTRIBUTING.md#create-a-pull-request)
  * [Join the Team](./.github/CONTRIBUTING.md#join-the-team)
* [Manage Something](./.github/MAINTAINING.md)
  * [Provide Support on Issues](./.github/MAINTAINING.md#provide-support-on-issues)
  * [Label Issues](./.github/MAINTAINING.md#label-issues)
  * [Clean Up Issues and PRs](./.github/MAINTAINING.md#clean-up-issues-and-prs)
  * [Create a Pull Request](./.github/MAINTAINING.md#create-a-pull-request)
  * [Review Pull Requests](./.github/MAINTAINING.md#review-pull-requests)
  * [Merge Pull Requests](./.github/MAINTAINING.md#merge-pull-requests)
  * [Tag a Release](./.github/MAINTAINING.md#tag-a-release)
  * [Release a Version](./.github/MAINTAINING.md#release-a-version)

</details>

## Where to Find Support [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

Looking to talk to someone or need some help? Please read our [support guidelines](./.github/SUPPORT.md).

## Tools We Use

* [Browserslist](https://github.com/browserslist/browserslist) - Used to share to our code which browsers we support
* [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog) - Used to generate our CHANGELOG
* [Husky](https://github.com/typicode/husky) - Used for auto-fixing linting errors on each commit
* [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) - Used for automating and releasing our library

## References

* [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) - For how we format commit messages
* [Contributor Convenant](https://www.contributor-covenant.org)
* [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) - For building out a quality CHANGELOG
* [Make a README](https://www.makeareadme.com/) - For building out this README
* [SemVer](https://semver.org/) - For versioning this library

## License [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

©2020 GNU General Public License v3. See [LICENSE](./LICENSE.md) for specifics.
