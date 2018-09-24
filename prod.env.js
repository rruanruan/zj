let gitSha = require('child_process')
    .execSync('git rev-parse HEAD')
    .toString()
    .trim();

// process.env.RELEASE_VERSION = gitSha.substr(2, 9) 不应截取

process.env.RELEASE_VERSION = gitSha;

module.exports = {
    RELEASE_VERSION: gitSha,
    X_SENTRY_TOKEN:'1b7253eebf9a11e8a7900242ac120007'
};
