import lint from 'mocha-eslint';

let paths = [
  'src/**/*.js'
];

let options = {
  formatter: 'compact'
};

lint(paths, options);