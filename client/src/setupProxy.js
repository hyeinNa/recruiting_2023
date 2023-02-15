require("dotenv").config();
//Cors 이슈 해결을 위해, Proxy Server 구축
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: `http://localhost:3005`,
      changeOrigin: true,
    })
  );
};
