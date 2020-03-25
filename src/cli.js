const { file, log, str } = require('@theholocron/chopper');
const ora = require('ora');
const api = require('./');
const { isExtends } = require('./utils');

async function cli (options) {
	const browserstats = `browserslist-stats.json`;

	file.exists(browserstats).then(file => {
		if (!file) {
			log.error(`No '${browserstats}' file found!`);
			process.exit(1);
		}
	});

	options.spinner = ora();
	options.spinner.start(`Attempting to calculate the average usage`);
	const average = api.getAverage(file.toJSON(browserstats));
	const statStr = `> ${average} in my stats`;
	options.spinner.text = `Calculated average usage`;

	switch (options._[0]) {
		case 'write': {
			options.spinner.text = `Attempting to write average stats to ${options.source}`;

			switch (options.source) {
				case 'file': {
					// file to use locally
					// @TODO: needs to read current file to amend using readline
					const rcfile = './.browserslistrc';
					log.error('Feature not ready');
					break;
				}

				case 'package': {
					const pkgfile = './package.json';
					const pkg = file.toJSON(pkgfile);
					let browserslist;

					// check if there is an existing browserslist key in package
					if (pkg.hasOwnProperty('browserslist')) {
						// stop processing if 'extends' key is being used
						if (isExtends(pkg.browserslist)) {
							options.spinner.stop();
							log.error(`You're using 'extends' and a shareable configuration. Please use the 'config' option.`);
							process.exit(1);
						}

						// check if there is an existing stat
						if (pkg.browserslist.length > 1) {
							browserslist = api.updateStats(pkg.browserslist, statStr);
						} else {
							// there is no existing stat
							browserslist = pkg.browserslist.unshift(statStr);
						}
					} else {
						// create new one
						browserslist = [ statStr ];
					}

					const data = {
						...pkg,
						browserslist,
					};

					if (!str.toFileSync(data, pkgfile)) {
						options.spinner.stop();
						log.error(`There was an error writing ${path} to the file system!`);
						process.exit(1);
					}
					str.toJSONFile(data, pkgfile);
					options.spinner.succeed(`${pkgfile} has been updated.`);
					break;
				}

				case 'config':
				default: {
					// shareable config
					const configfile = './browserslistrc.json';
					let configData;
					await file.exists(configfile).then(conf => {
						if (!conf) {
							configData = [ statStr ];
						} else {
							const parsed = file.toJSON(configfile);
							configData = api.updateStats(parsed, statStr);
						}
					});

					file.createJSON(configData, configfile)
						.then(msg => {
							options.spinner.succeed(`Updated ${configfile}`);
						})
						.catch(err => log.error(err));
					break;
				}
			}
			break;
		}

		case 'get':
		case 'get-average':
		default: {
			options.spinner.succeed(`Calculated average usage`);
			process.stdout.write(average.toString());
			break;
		}
	}
}

module.exports = cli;
