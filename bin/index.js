#!/usr/bin/env node

/* eslint-disable import/order */
const updateNotifier = require('update-notifier');
const { aliases, copyright, usage } = require('../src/options');
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
const pkg = require('../package.json');
const cli = require('../src/cli');

updateNotifier({ pkg }).notify();

cli(options);
