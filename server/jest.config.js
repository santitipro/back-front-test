module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['./tests/setup/setupTests.ts'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1'
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/']
}
