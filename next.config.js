const withLess = require("next-with-less");

module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
  productionBrowserSourceMaps: false,
  env: {
    INFURA_IPFS: process.env.INFURA_IPFS,
    TEAMSA_IPFS: process.env.TEAMSA_IPFS,
    TABLELAND_ENDPOINT: process.env.TABLELAND_ENDPOINT,
    TABLELAND_ENDPOINT_RPC: process.env.TABLELAND_ENDPOINT_RPC,
  },
  reactStrictMode: true,
});
