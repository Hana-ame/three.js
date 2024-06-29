started at 240629-2300.

for exhibition the cubic in 3d for diamond.

some trival tips.   
[![23:54:44](https://moonchan.xyz/icon/docs.github.com)使用折叠部分组织信息 - GitHub 文档](https://docs.github.com/zh/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections)

## 查阅阶段
<details>
  <summary>js在前端页面中实现一个可以拖动视角的3d界面 ，框架</summary>
To implement a draggable viewpoint in a 3D interface on a frontend webpage using JavaScript, you can utilize various frameworks and libraries. Here are some popular options:

1. Three.js [[1]](https://blog.csdn.net/baidu_29701003/article/details/127417924):
   - Three.js is a powerful 3D engine framework based on WebGL.
   - It provides a wide range of features for creating 3D scenes, including camera controls for dragging and rotating the viewpoint.
   - You can easily implement a draggable viewpoint by using the OrbitControls module provided by Three.js.

2. A-Frame [[1]](https://blog.csdn.net/baidu_29701003/article/details/127417924):
   - A-Frame is a web framework for building virtual reality (VR) experiences.
   - It is built on top of Three.js and provides a declarative HTML syntax for creating 3D scenes.
   - A-Frame includes components for camera controls, such as the `look-controls` component, which allows you to drag and rotate the viewpoint.

3. Panolens.js [[1]](https://blog.csdn.net/baidu_29701003/article/details/127417924):
   - Panolens.js is a library built on top of Three.js specifically for creating 360-degree panoramic views.
   - It provides easy-to-use controls for dragging and rotating the viewpoint in a panoramic scene.

4. Pannellum [[1]](https://blog.csdn.net/baidu_29701003/article/details/127417924):
   - Pannellum is a lightweight and open-source panorama viewer library.
   - It is built using HTML5, CSS3, JavaScript, and WebGL, and does not require any plugins.
   - Pannellum provides built-in support for dragging and rotating the viewpoint in a panorama.

These frameworks and libraries offer different levels of complexity and features, so you can choose the one that best suits your project requirements.

---
Learn more:
1. [分享8个前端可以制作360度WebVr全景视图框架\_前端3d框架-CSDN博客](https://blog.csdn.net/baidu_29701003/article/details/127417924)
2. [JavaScript 3D动画库three.js入门篇 - 闫佳杰 - 博客园](https://www.cnblogs.com/stary-pointer/p/17098049.html)
3. [three.js 拖拽 - 名字不好起啊 - 博客园](https://www.cnblogs.com/guofan/p/16304835.html)
</details>

<details>
  <summary>其中使用最多的</summary>
根据搜索结果，以下是使用最多的几个前端页面拖动视角和3D界面框架：

1. Three.js [[1]](https://xiaobaiha.gitbook.io/tech-share/gamedev/you-xi-zhong-de-ji-zhong-tou-ying-shi-tu)
Three.js是一个使用JavaScript编写的轻量级3D库，广泛用于创建交互式的3D图形和动画效果。它提供了丰富的功能和易于使用的API，可以轻松地在网页上实现拖动视角和创建3D界面。

2. Babylon.js [[1]](https://xiaobaiha.gitbook.io/tech-share/gamedev/you-xi-zhong-de-ji-zhong-tou-ying-shi-tu)
Babylon.js是另一个流行的JavaScript 3D引擎，用于创建高性能的WebGL应用程序。它具有强大的渲染能力和丰富的特性，可以实现复杂的3D场景和交互效果。

3. A-Frame [[1]](https://xiaobaiha.gitbook.io/tech-share/gamedev/you-xi-zhong-de-ji-zhong-tou-ying-shi-tu)
A-Frame是一个基于WebVR的开源框架，用于构建虚拟现实（VR）和增强现实（AR）应用程序。它使用HTML语法和JavaScript组件，使开发者可以轻松地创建交互式的3D界面和场景。

4. React 3D [[1]](https://xiaobaiha.gitbook.io/tech-share/gamedev/you-xi-zhong-de-ji-zhong-tou-ying-shi-tu)
React 3D是一个基于React框架的3D库，它提供了一套组件和工具，用于在React应用程序中创建和管理3D元素和场景。它结合了React的声明性和组件化开发模式，使开发者可以更轻松地构建复杂的3D界面。

这些框架和库都具有广泛的社区支持和文档资源，可以帮助开发者快速上手并实现所需的拖动视角和3D界面效果。

---
Learn more:
1. [游戏中的几种投影视图 | tech share](https://xiaobaiha.gitbook.io/tech-share/gamedev/you-xi-zhong-de-ji-zhong-tou-ying-shi-tu)
2. [虚拟现实(VR)界面设计入门 - 25学堂](https://www.25xt.com/appdesign/22461.html)
3. [7. QGIS图形用户界面 - QGIS Documentation 文档](https://docs.qgis.org/3.16/zh_Hans/docs/user_manual/introduction/qgis_gui.html)
</details>

<details>
  <summary>一个three.js的example页面</summary>
以下是一个three.js的示例页面：

示例页面名称：Three.js官方示例页面
示例页面链接：https://threejs.org/examples/

该示例页面是Three.js官方提供的一个集合，其中包含了许多精彩的three.js示例。这些示例涵盖了各种不同的场景和效果，包括但不限于：

1. 3D模型展示：展示了如何加载和渲染各种3D模型，如汽车、动物、建筑等。
2. 粒子效果：展示了如何使用粒子系统创建各种特效，如雨、火、烟等。
3. 光照和阴影：展示了如何使用不同类型的光源和材质来实现逼真的光照和阴影效果。
4. 物理模拟：展示了如何使用物理引擎来模拟物体的运动和碰撞效果。
5. 纹理和材质：展示了如何使用纹理和材质来给物体添加贴图和颜色。
6. 相机控制：展示了如何使用相机控制器来实现用户交互，如旋转、缩放和平移场景。

通过访问该示例页面，您可以查看每个示例的演示效果，并查看示例的源代码以了解如何实现这些效果。您还可以在示例页面上找到相关的文档和教程，以帮助您更好地理解和使用Three.js。

---
Learn more:
1. [threejs-tutorial/01 Three.js简介.md at main · puxiao/threejs-tutorial · GitHub](https://github.com/puxiao/threejs-tutorial/blob/main/01%20Three.js%E7%AE%80%E4%BB%8B.md)
2. [如何在你的项目中引入three.js | Discover three.js](https://discoverthreejs.com/zh/book/introduction/get-threejs/)
3. [高级Web技术 Lab 1：Three.js 与 XML](https://fduss.github.io/AdvancedWebTechnology/Lab1_Three.js+XML)
</details>

<details>
  <summary>three.js 可交互框架</summary>
在Three.js中，可以使用一些可交互的框架来增强用户与3D场景的交互性。以下是一些常用的可交互框架：

1. OrbitControls：OrbitControls是Three.js官方提供的一个控制器，可以让用户通过鼠标或触摸来旋转、缩放和平移相机视角。它简化了相机控制的实现，使用户可以自由地浏览和交互场景[[1]](http://www.yanhuangxueyuan.com/doc/Three.js/ThreejsWeb.html)。

2. PointerLockControls：PointerLockControls是一个用于实现第一人称视角控制的框架。它允许用户通过鼠标移动来控制相机的方向，类似于第一人称射击游戏中的控制方式[[1]](http://www.yanhuangxueyuan.com/doc/Three.js/ThreejsWeb.html)。

3. DragControls：DragControls是一个用于实现拖拽物体的框架。它可以让用户通过鼠标或触摸来拖动场景中的物体，实现物体的交互性和可操作性[[1]](http://www.yanhuangxueyuan.com/doc/Three.js/ThreejsWeb.html)。

4. TransformControls：TransformControls是一个用于实现物体变换（平移、旋转、缩放）的框架。它可以让用户通过鼠标或触摸来对场景中的物体进行变换操作，例如改变物体的位置、旋转角度和大小[[1]](http://www.yanhuangxueyuan.com/doc/Three.js/ThreejsWeb.html)。

这些可交互框架可以与Three.js的渲染器、场景、相机和物体结合使用，为用户提供更加直观和灵活的交互体验。通过使用这些框架，开发者可以快速实现各种交互功能，提升用户与3D场景的互动性。

---
Learn more:
1. [Three.js和前端结合](http://www.yanhuangxueyuan.com/doc/Three.js/ThreejsWeb.html)
2. [如何在Three.js中创建可交互的3D虚拟现实场景？ | 切图网](https://www.qietu.com/WUIAR1/)
3. [最佳的19个Web前端3D JS框架和库\_浏览器\_Three\_图形](https://www.sohu.com/a/758804905_121331981)
</details>

## OrbitControl
#### [![23:59:55](https://moonchan.xyz/icon/threejs.org)Installation – three.js docs](https://threejs.org/docs/#manual/en/introduction/Installation)
#### [![00:01:36](https://moonchan.xyz/icon/threejs.org)OrbitControls – three.js docs](https://threejs.org/docs/#examples/en/controls/OrbitControls)

### 实操
<details>
  <summary>three。js 如何创建一个能够打包到静态网页的环境</summary>
使用 Three.js 创建一个能够打包到静态网页的环境，需要以下步骤：

**1. 初始化项目**

- 创建一个新的项目文件夹，例如 `my-threejs-project`。
- 在项目文件夹中打开终端，运行 `npm init -y` 初始化一个 npm 项目。

**2. 安装依赖**

- 安装 Three.js 库：
  ```bash
  npm install three
  ```
- 安装构建工具，例如 Webpack：
  ```bash
  npm install webpack webpack-cli --save-dev
  ```
- 安装 HTML 插件，用于生成 HTML 文件：
  ```bash
  npm install html-webpack-plugin --save-dev
  ```
- 可选：安装其他必要的库，例如用于加载模型的加载器，例如 GLTFLoader：
  ```bash
  npm install three/examples/jsm/loaders/GLTFLoader
  ```

**3. 创建项目结构**

- 创建 `src` 文件夹，用于存放源代码。
- 在 `src` 文件夹中创建 `index.js` 文件，作为项目的入口文件。
- 创建 `index.html` 文件，作为项目的模板文件。

**4. 配置 Webpack**

- 在项目根目录下创建 `webpack.config.js` 文件，并添加以下配置：

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // 设置为 production 用于生产环境
  entry: './src/index.js', // 入口文件
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.resolve(__dirname, 'dist'), // 输出目录
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // 添加 Babel 预设，用于支持 ES6 语法
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // 模板文件
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8080, // 设置开发服务器端口号
  },
};
```

**5. 编写 Three.js 代码**

- 在 `src/index.js` 文件中编写 Three.js 代码，例如：

```javascript
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
```

**6. 运行 Webpack**

- 在终端中运行 `npx webpack` 命令，Webpack 会将代码打包到 `dist` 文件夹中。

**7. 访问静态网页**

- 打开 `dist/index.html` 文件，你就能看到 Three.js 场景在浏览器中运行。

**注意：**

- 为了在生产环境中部署静态网页，需要将 `webpack.config.js` 文件中的 `mode` 设置为 `production`，并使用 `npx webpack --mode production` 命令进行打包，以便生成优化后的代码。
- 如果你使用的是其他构建工具，例如 Parcel，则需要根据其文档进行相应的配置。
- 为了方便开发，可以使用 Webpack Dev Server，它会自动启动一个开发服务器，并在代码修改后自动刷新浏览器。
- 你可以根据自己的需求添加其他库和配置，例如加载模型、添加动画、使用控制器等。

希望这些步骤能帮助你创建一个能够打包到静态网页的 Three.js 环境。
</details>

### 结果
看到一个旋转的绿色正方体。  
接下来试着作出拖动效果。