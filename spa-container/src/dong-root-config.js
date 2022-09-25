import { registerApplication, start } from "single-spa";

/**
 * 注册前端微应用
 */
// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// 如果location.pathname 不是/, 将不启动这个welcome应用
registerApplication(
  "@single-spa/welcome",
  () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  (location) => location.pathname === "/"
);

// @dong/vanilla 模块地址在index.ejs里面配置
registerApplication({
  name: "@dong/vanilla",
  app: () => System.import("@dong/vanilla"),
  activeWhen: ["/vanilla"],
});

// 注册react 微应用
registerApplication({
  name: "@dong/micro-react-01",
  app: () => System.import("@dong/micro-react-01"),
  activeWhen: ["/react-01"],
});

// 注册react 微应用
registerApplication({
  name: "@dong/micro-react-02",
  app: () => System.import("@dong/micro-react-02"),
  activeWhen: ["/react-02"],
});

start({
  urlRerouteOnly: true,
});
