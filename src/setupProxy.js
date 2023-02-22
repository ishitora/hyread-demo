const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/exam/user-list',
        createProxyMiddleware({
            target: 'https://mservice.ebook.hyread.com.tw',
            changeOrigin: true,
        })
    );
};
