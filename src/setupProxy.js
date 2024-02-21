const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/mile',
    createProxyMiddleware({
      target: 'https://apidev.mahindradealerrise.com/',
      changeOrigin: true,
    })
  );
};