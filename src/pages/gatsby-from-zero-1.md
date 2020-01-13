---
title: "拥抱 Gatsby，用 React 搭建完整博客系统（一）—— 搭建 Gatsby 基础环境"
author: 'Beta'
date: "2019-12-23"
tag: ["前端交流", "Gatsby"]
---
### 写在前面
个人网站是程序员的标配，目前看来，Jekyll、Hexo、Hugo 之类的静态博客已经成为主流，WordPress 和 Ghost 等也仍然有一定市场。而作为一名前端开发，自然不能满足于样式和结构上都只能遵从于使用的主题，我们要掌控我们自己的网站。

目前各种博客系统中，比较普遍的方式都是使用模板引擎（比如 `ejs`、`jade` 等），使用模板引擎搭起页面的架子，然后为博客引擎中使用的 `class` 统一撰写样式，引入需要的 `js` 库，再通过一个统一的配置文件实现类似全局变量的功能。

本人非常不喜欢模板引擎这种东西，这种古老的东西已经很难满足现代网站的需求了。目前前端最热门的东西那自然是三大框架——Vue、React、Angular，如果能直接用自己熟悉的框架来写自己的网站，那自然是最好不过的，本系列文章的目的就是实现这一目标。

当然，无论是是使用官方脚手架还是基于 Vue、React 的其他框架，从零开始搭建一个完整的博客，都是相当困难的，而且所有的功能基本都需要依靠自己手写，扩展性也堪忧。这时候我发现了 Gatsby，这是一款在国外非常流行的网站框架：
* 基于 React，是 React 官网御用框架
* 整合 GraphQL，无缝衔接体验良好
* 活跃的社区，庞大的主题库和插件库
* 极高的自由度，React 就是要自由的写

如果只需要一个静态博客，那只需要 Gatsby，但如果你想拥有一个内容管理后台以及完美体验 GraphQL，推荐大家使用一款 Headless CMS，当然要支持 GraphQL 的那种，目前看来，免费开源的有 Strapi 和 Prism，还有一些收费的诸如 Contentful、GraphCMS 等。我们选择免费开源，并且在 Github 上获得了超过 20k 的 star 的 Strapi。

> Headless CMS 是一种内容管理系统，只负责管理内容，不负责外观表现形式，该系统将内容与外观分离，通过接口与外部交互。简单的说，有了 Headless CMS，前端开发不再依赖后端开发就能自己实现所有后台管理功能。

本系列文章初步规划了十一篇，从零开始一步一步的实现完整的博客系统，主要内容将包括：

* （一）搭建 Gatsby 基础环境
* （二）从本地文件获取数据
* （三）渲染 Markdown 文件并生成页面
* （四）搭建 Strapi 环境
* （五）从远程 Strapi 接口获取数据
* （六）渲染远程接口数据并生成页面
* （七）网站基本页面结构设计及页面创建
* （八）给我们的网站添加样式
* （九）通过接口修改 Strapi 中的数据
* （十）搭建基础的后台管理页面
* （十一）高级功能探索

本篇是本系列的第一篇，搭建 Gatsby 基础环境。

## 搭建 Gatsby 网站
和其他静态网站工具一样，要搭建一个 Gatsby 网站非常之简单：

* 安装官方脚手架工具
* 使用官方脚本架工具创建工程
* 部署项目

### 安装官方脚手架工具
> 本文全部使用 yarn，使用 npm 的朋友自行调整

```
yarn global add gatsby-cli
```

### 使用脚手架创建工程
 Gatsby 的 Starter Library 中有非常多的模板，但本文是以学习为目的，所以选择了官方提供的基础模板，自己一步一步的搭起来，也有助于后期我们的自定义。
```
gatsby new gatsby-site
```
稍等片刻 Gatsby 工程就创建好了，进入工程目录并启动工程就可以启动开发服务器。

> 本人搭建过程中，服务器报错，提示`pngquant failed to build, make sure that libpng-dev is installed`，经搜索安装相关组件解决，服务器环境为 CentOS 7，安装命令为`yum install libpng-devel`，请不同系统环境的朋友自行搜索解决。

```
cd gatsby-site
yarn develop
```
现在你就可以打开编辑器，打开 `http://localhost:8000` 开始开发你的网站了。

![gatsby-from-zero-1-1.png](https://pic.pbeta.cn/01/1911/1/gatsby-from-zero-1-1.png-w800)

### Gatsby 项目结构
我们查看我们刚刚创建的项目的目录结构：
![gatsby-from-zero-1-3.png](https://pic.pbeta.cn/01/1911/1/gatsby-from-zero-1-3.png-w800)

其中 `public` 是构建目录，`.cache` 存放构建缓存，我们无须关心，我们的开发主要是在 `src` 目录中进行。

与 `Next`、`Nuxt` 等流行框架一样，Gatsby 同样支持自动生成路由，我们所有的页面都写在 `pages` 目录下就会自动生成路由，页面组件写在 `components`目录下。另外，比较特别的是根目录下的四个 gatsby 开头的文件：
* `gatsby-config.js`——配置 Gatsby 站点的选项，比如项目标题和项目描述的元数据，插件等等
* `gatsby-node.js`——实现了 Gatsby 的 Node.js API，来自定义和扩展影响构建过程的设置
* `gatsby-browser.js`——使用 Gatsby 的浏览器 API 自定义和扩展影响浏览器的的设置
* `gatsby-ssr.js`——使用 Gatsby 的服务端渲染 API 自定义影响服务端渲染的默认设置

后面文章中，我们就将使用这些配置文件来实现我们的功能。

### 体验 GraphQL
访问 [http://localhost:8000/__graphql](http://localhost:8000/__graphql-w800) 就可以打开 GraqhQL Explorer，左侧可以看到当前可以获得的所有资源，如果你对 GraphQL 完全不了解，请自行搜索了解，要达到初步使用的程度，大约只需要半小时。

![gatsby-from-zero-1-4.png](https://pic.pbeta.cn/01/1911/1/gatsby-from-zero-1-4.png-w800)

### 部署项目
如果你部署过任何一个静态项目，都应该对此很熟悉，使用`gatsby build`命令，之后将生成的静态文件自行部署即可。

官方教程中推荐了 Netlify 和 Zeit Now 两款工具，我使用了 Now 这款工具，也十分推荐你使用，Gatsby 部署相关教程可访问[这里](https://gatsby.wiki/docs/recipes.html#_9-%E9%83%A8%E7%BD%B2%E4%BD%A0%E7%9A%84%E7%AB%99%E7%82%B9)。

Zeit Now 使用可以访问 [Now 官方网站](https://now.sh)，装好其脚手架，然后在项目目录下运行`now`即可，如果有任何部署上的困难，直接留言提问即可。

> 本站已经部署在了 Now 上，并绑定了域名 [now.st](https://now.st)

## 总结
目前我们已经拥有了一个基于 React 和 GraphQL 的个人网站了，虽然一切都非常简陋，但别忘了它拥有优良的基因，从下一篇文章开始，我们就将一点一点的进行改造，来打造一个集美观与实用的个人博客。