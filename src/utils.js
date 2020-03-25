// combines the vendor and version into a nested array structure for manipulating
const combineVendorWithVersion = ([ vendor, versions ]) => Object
	.keys(versions)
	.reduce((acc, version) => ({
		...acc,
		[`${vendor}${version}`]: versions[version]
	}), {});

// a reducer to flatten out the vendros with version
const flattenVendorVersions = (acc, vendorVersion) => [
	...acc,
	...Object.entries(vendorVersion)
];

// filter for removing all browsers/versions with zero for a value
const isPercentageNonZero = ([ vendorVersion, percentage ]) => percentage > 0;

// sort the nested arrays by their values/versions
const sortVersionsAscendingByVendor = (a, b) => b[1] - a[1];

// arrange data so its sorted with all non-zero data
const getUsageAboveZero = data => Object
	.entries(data)
	.map(combineVendorWithVersion)
	.reduce(flattenVendorVersions, [])
	.filter(isPercentageNonZero)
	.sort(sortVersionsAscendingByVendor);

const isExtends = arr => arr.length === 1 && arr[0].includes('extends');

module.exports = {
	getUsageAboveZero,
	isExtends,
};
