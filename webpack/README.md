- [前言](#前言)
  - [part1-whatIsLoader](#part1-whatisloader)
  - [part2-loadResource](#part2-loadresource)
    - [如何加载 json](#如何加载-json)
    - [如何加载图片](#如何加载图片)
    - [如何加载 css](#如何加载-css)
  - [part3-babel](#part3-babel)
    - [如何使用 babel](#如何使用-babel)
  - [part4-analyse 构建分析](#part4-analyse-构建分析)
    - [构建速度分析](#构建速度分析)
    - [构建体积分析](#构建体积分析)
  - [提升构建速度](#提升构建速度)
    - [缓存策略](#缓存策略)
    - [开启多线程](#开启多线程)
    - [分割打包](#分割打包)

# 前言

本文章基于 webpack4 以上版本。

在 webpack 中，一切皆模块。

## part1-whatIsLoader

webpack 只能识别 js 模块，要想打包 sass 、json 等资源，需将这些资源转换成 js 模块，而 loader 就是做这部分的转换工作。

## part2-loadResource

### 如何加载 json

[json-loader 的实现](json-loader/index.js)

### 如何加载图片

url-loader ，将图片转化为 base64 字符串，可以减少 http 请求但增加了打包体积，仅适合小图片。

file-loader ，将图片存放到特定目录，并返回图片地址。

### 如何加载 css

css-loader ，例如 js 执行 `require('base.css')` ，css-loader 会将 css 文件内容转化为数组格式进行存储。

style-loader ，拿到 css-loader 处理后的数组，将数组转化为 style 标签并挂载到页面上。

## part3-babel

[babel 官网](https://www.babeljs.cn/)

babel 作用是将 es6+ 代码转化为向后兼容的 js 语法。另外也可以借助 babel 在转化的过程插入用户个性化的操作。

### 如何使用 babel

[具体 babel 配置说明](https://tsejx.github.io/webpack-guidebook/best-practice/practical-application/loading-javascript)

babel 有自己的插件体系，以 `babel-plugin-annotate-console-log` 来说，可以在 `console.log` 打印内容中添加输出位置函数的名称，便于了解输出位置。

## part4-analyse 构建分析

### 构建速度分析

[speed-measure-webpack-plugin](https://github.com/stephencookdev/speed-measure-webpack-plugin) 插件能够测量 Webpack 构建过程中，plugin 和 loader 的构建时间，并给出测量报告的输出，便于我们分析优化。

![](https://tsejx.github.io/webpack-guidebook/static/speed-measure-webpack-plugin.5930857c.png)

### 构建体积分析

[webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) 插件能够在 Webpack 构建结束后生成构建产物体积报告，配合可视化的页面，能够直观知道产物中的具体占用体积。

![效果图](https://tsejx.github.io/webpack-guidebook/static/webpack-bundle-analyzer-report.a6ef627c.png)

## 提升构建速度

### 缓存策略

[HardSourceWebpackPlugin](https://github.com/mzgoddard/hard-source-webpack-plugin)，为模块提供中间缓存步骤，首次构建为正常速度，第二次之后构建速度提升 50% 以上。

[cache-loader](https://github.com/webpack-contrib/cache-loader)，在开销较大的 loader （如：vue-loader、babel-loader）之前放置 `cache-loader` ，会将结果缓存在存盘中，默认在 `node_modueles/.cache/cache-loader` 。

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.ext$/,
        use: ["cache-loader", "babel-loader"],
        include: path.resolve("src"),
      },
    ],
  },
};
```

### 开启多线程

[thread-loader](https://github.com/webpack-contrib/thread-loader) 开启多进程构建。

`thread-loader` 会将你的 `loader` 放置在一个 `worker` 池里面运行，每个 `worker` 都是一个单独的有 `600ms` 限制的 Node.js 进程。同时跨进程的数据交换也会被限制。

请在高开销的 `loader` 中使用，否则效果不佳。

实现原理：

- 每次 Webpack 解析一个模块，`thread-loader` 会将它及它的依赖分配给 worker 线程中
- 把这个 `loader` 放置在其他 loader 之前，放置在这个 `loader` 之后的 `loader` 就会在一个单独的 worker 池（worker pool）中运行

在 worker 池（worker pool）中运行的 `loader` 是收到限制的。例如：

- 这些 `loader` 不能产生新的文件
- 这些 `loader` 不能使用定制的 `loader` API（也就是通过插件）
- 这些 `loader` 无法获取 Webpack 的选项设置

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve("src"),
        use: [
          "thread-loader",
          // your expensive loader (e.g babel-loader)
        ],
      },
    ],
  },
};
```

[terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin) 压缩代码。开启 [parallel](https://github.com/webpack-contrib/terser-webpack-plugin#parallel) 参数，使用多进程并行运行来提高构建速度。

```js
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        // 多线程，最大4个并发
        parallel: 4,
      }),
    ],
  },
};
```



### 分割打包

- Webpack 4+：SplitChunksPlugin
- Webpack 3：CommonsChunkPlugin

此处只介绍 SplitChunksPlugin。



**概念介绍**

chunk （块）：若干个 js module 的集合

bundle（包）： chunk （块）的集合，代表一个可运行的整体



**分割打包思想**

不分包情况，一个html页面仅打包一个bundle，bundle.js体积大，并且每次构建都要重新构建所有内容，客户端请求bundle.js响应慢。

分包后，一个html页面会打包出多个chunk，比如将node_modules单独打包一个chunk，我们可以为chunk配置构建缓存和客户端请求缓存，当重新构建时webpack仅会针对存在修改的chunk重新打包，这样提高了构建速度。客户端仅在访问存在更新的模块时才发起对新的chunk请求。



**分割算法**

1. 从 entry 开始打包，将依赖的 module 打包成一个chunk
2. 遍历 1中 module 了，将其依赖的 module 也打包进chunk
3. 过程中遇到动态引入import() 的module时，将其独立打包成一个chunk
4. 重复以上过程知道得到所有chunk







