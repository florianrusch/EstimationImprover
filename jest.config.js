module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.vue$': 'vue-jest',
	},
	collectCoverageFrom: ['<rootDir>/src/**/*.{ts,vue}'],
	testMatch: ['<rootDir>/src/**/*.spec.ts'],
	modulePaths: ['<rootDir>'],
}
