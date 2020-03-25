const { getUsageAboveZero } = require('./utils');

const api = {
	getMedian (data) {
		const usageStatsAboveZero = getUsageAboveZero(data);
		const middleIndex = Math.floor(usageStatsAboveZero.length / 2);

		if (usageStatsAboveZero.length % 2) {
			return usageStatsAboveZero[middleIndex][1];
		}

		return (usageStatsAboveZero[middleIndex - 1][1] + usageStatsAboveZero[middleIndex + 1][1]) / 2;
	},

	updateStats (stats, str) {
		return stats.map(stat => {
			if (stat.includes('in my stats')) {
				return str;
			}

			return stat;
		});
	},
};

module.exports = api;
