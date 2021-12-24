module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^@(components|pages|themes)/(.+)': '<rootDir>/src/$1/$2',
    '^@test/(.+)': '<rootDir>/test/$1',
  },
  roots: ['<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
}
