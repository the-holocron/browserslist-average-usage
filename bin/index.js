#!/usr/bin/env node

const pkg = require('../package.json');
const cli = require('../src/cli');
const { aliases, copyright, usage } = require('../src/options');
const updateNotifier = require('update-notifier');
const options = require('yargs')
	.usage(usage)
	.commandDir('../src/cmds')
	.command('$0', 'Calculates the median level of browser usage based on custom stats in order to take advantage of Browserslist custom usage')
	.example('$0')
	.alias(aliases)
	.help('h')
	.version()
	.epilogue(copyright)
	.argv;

updateNotifier({ pkg }).notify();

cli(options);
