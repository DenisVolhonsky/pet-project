module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^axios$': require.resolve('axios'), // Принудительно используем CommonJS версию
  },
  transformIgnorePatterns: ['node_modules/(?!axios)'],
};]