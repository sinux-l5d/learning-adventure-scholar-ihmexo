const path = require("path");
// const { alias } = require("react-app-rewire-alias");
const { alias, aliasJest } = require("react-app-rewire-alias");

// module.exports = function override(config, env) {
//   alias({
//     "@": "./src/",
//     "@components": "./src/components/",
//     "@pages": "./src/pages",
//     "@services": "./src/services/",
//     "@stores": "./src/services/stores/",
//     //   routes: path.resolve(__dirname, "src/routes"),
//   })(config);

//   return config;
// };

const aliasMap = {
  "@": "./src/",
  "@components": "./src/components/",
  "@pages": "./src/pages",
  "@services": "./src/services/",
  "@stores": "./src/services/stores/",
};

module.exports = alias(aliasMap);
module.exports.jest = aliasJest(aliasMap);
