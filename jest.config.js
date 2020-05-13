module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^@(components|pages|themes)/(.+)': '<rootDir>/src/$1/$2',
    '^@images/(.+)': '<orotDr>/static/images/$1',
  },
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/src/enzymeConfig.ts'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
}
