# blog-github

> 基于github pages，使用vue框架写的个人博客。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

需求分析：

1. 能切换主题，不影响布局。(重绘和回流的样式代码分开写)

2. 文章存为md，浏览时转为html。(使用marked.js库)

3. 文章目录排序、搜索。(标签、索引、分类)

4. 其他网站入口

5. 作品集

7. 流量统计、评论、分享

6. 身份验证，()

开发步骤：  

1. bg、intro、footer(要求组件化、模块化、样式分离、便于定制、文档+注释)

2. 文章目录，摘要cell，自动生成摘要

3. 文章，获取md转html

