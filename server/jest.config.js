module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  displayName: 'SERVER',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/fixtures/',
  ],
};
