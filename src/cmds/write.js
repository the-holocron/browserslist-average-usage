exports.aliases = [ 'write-file' ];
exports.command = 'write [source]';
exports.builder = yargs => yargs.positional('source', {
	choices: ['config', 'file', 'package'],
	default: 'config',
	describe: 'Where to write the usage stats, either a config file or within the package',
});
exports.describe = 'Writes to a source of ones choosing of where to store the average usage statistics';
