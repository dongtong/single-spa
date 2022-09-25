// react, react-dom的引用在index.ejs中import-map指定版本
import React from "react";
import ReactDOM from "react-dom";
// Single SPA 创建基于React框架实现的微应用
import singleSpaReact from "single-spa-react";
// 渲染在页面中的根组件
import Root from "./root.component";

// domElementGetter指定根组件的渲染位置
// errorBoundary错误发生时的处理
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter: () => document.getElementById("micro_react_01"),
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return <h2>Opps...</h2>;
  },
});

// 创建不基于框架的微应用，需要手动导出生命周期函数
// 返回必要的生命周期函数
export const { bootstrap, mount, unmount } = lifecycles;
