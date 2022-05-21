/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'pnpm next:build && pnpm start',
		port: 3000
	}
};

module.exports = config;
