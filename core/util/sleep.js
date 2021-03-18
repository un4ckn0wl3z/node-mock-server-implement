// How to use? -> await require('../util/sleep').sleep(10000);

exports.sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));


