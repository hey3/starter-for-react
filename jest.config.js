module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^@(components|pages|themes)/(.+)': '<rootDir>/src/$1/$2',
  },
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/src/enzymeConfig.ts'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
}
