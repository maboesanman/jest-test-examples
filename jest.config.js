// jest.config.js
module.exports = {
  preset: "jest-preset-coffeescript",
  verbose: true,
  roots: [
    '<rootDir>',
  ],
  moduleFileExtensions: [
    'js',
    'vue',
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  testRegex: [
    '.*(test|spec).*\.js$'
  ]
};