module.exports = {
  projects: ["<rootDir>/src"],
  verbose: true,
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  modulePathIgnorePatterns: ["<rootDir>/build/"],
  coverageReporters: ["html", "lcov", "text"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: -10
    }
  }
};
