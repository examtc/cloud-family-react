
const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy("/webstock", {
        target: "ws://39.106.73.167",
        changeOrigin: true, // needed for virtual hosted sites
        ws: true, // proxy websockets
        header: ""
        // pathRewrite: {
        // "^/webstock": ""
        // }
    })
  );
};
