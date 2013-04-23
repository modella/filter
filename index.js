module.exports = ((typeof process != 'undefined') && process.env.TEST_COV) ? require('./lib-cov/filtered') : require('./lib/filtered');
