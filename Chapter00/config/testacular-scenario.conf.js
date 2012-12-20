basePath = '../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'scenario/*-test.js'
];

autoWatch = true;

browsers = ['PhantomJS'];

singleRun = false;

proxies = {
  '/': 'http://localhost:9876/'
};

urlRoot = '/__testacular/';

