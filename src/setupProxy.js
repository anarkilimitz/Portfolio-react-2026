const { createProxyMiddleware } = require('http-proxy-middleware');

const backendHost = process.env.PHP_HOST || '127.0.0.1';
const backendPort = process.env.PHP_PORT || '8000';
const backendTarget = `http://${backendHost}:${backendPort}`;

const proxy = createProxyMiddleware({
	target: backendTarget,
	changeOrigin: true,
	secure: false,
	logLevel: 'silent',
});

module.exports = function setupProxy(app) {
	app.use(['/news.php', '/weather.php', '/mailer'], proxy);
};
