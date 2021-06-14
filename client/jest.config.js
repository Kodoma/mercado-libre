module.exports = {
    verbose: true,
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/tsconfig.json'
        }
    },
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!**/.next/**',
        '!**/coverage/**',
        '!**/config/**',
        '!**/*.js',
        '!**/models/**'
    ],
    testEnvironment: "node",
    collectCoverage: true,
    coverageProvider: 'babel',
    displayName: 'CLIENT',
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
    extensionsToTreatAsEsm: ['.ts'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js'
    },
    transformIgnorePatterns: [
        '/node_modules/',
        '[/\\\\]node_modules[/\\\\](?!lodash-es/).+\\.js$',
        '^.+\\.module\\.(css|sass|scss)$'
    ],
    moduleNameMapper: {
        '^.+\\.(css|less|scss|sass)$': 'identity-obj-proxy'
    },
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node']
};
