const singleSpaWebpackConfig = require('webpack-config-single-spa');
// 不能直接修改singleSpaWebpackConfig
const { merge } = require("webpack-merge");

module.exports = () => {
  // 配置必选的两个参数
  const defaultConfig = singleSpaWebpackConfig({
    orgName: "dong", // 团队名，或者公司名
    projectName: "vanilla" // 项目名
  });

  return merge(defaultConfig, {
    devServer: {
      port: 9001
    }
  })
}