# BannerSlider.js(v1.0 beta)
基于JQuery的可扩展图片幻灯片展示插件。

使用过程中若遇若遇其它问题请与whenhan@foxmail.com联系。
该插件当前版本为1.0测试版本，还有许多不足之处，还请谅解，同时欢迎大家各种意见。

## 插件用法
你需要引用如下文件：
 - [jQuery库](http://jquery.com/). (1.8.0 以上)
 - Js文件 `jquery.bannerSlider.js` (或者压缩版本 `jquery.bannerSlider.min.js`)
 - CSS `jquery.bannerSlider.css`


### 包含文件:
```html
<link rel="stylesheet" type="text/css" href="jquery.bannerSlider.css" />

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

<script type="text/javascript" src="jquery.bannerSlider.js"></script>
```

### HTML 文件配置
你只需如下简单配置HTML文档
```html
<div class="banner">
    <a href="#"><img src="img/banner.jpg" width="1000" height="540"></a>
    <a href="#"><img src="img/adverb.jpg" width="1000" height="540"></a>
    <a href="#"><img src="img/banner.jpg" width="1000" height="540"></a>
    <a href="#"><img src="img/adverb.jpg" width="1000" height="540"></a>
</div>
```


### 初始化
你所需要做的仅仅只是如下操作：

```javascript
$(function(){
    $('.banner').bannerSlider();
});
```

更多案例初始化配置如下：
```javascript
$(function(){
    $('.banner').bannerSlider({
        slider:{
            showSlider: "true",
            showIndex: "true",
            slParentBg: "rgba(0,0,0,0.5)",
            slph: "48px",
            slBg: "#f00",
            slHBg: "#fff",
            slHColor: "#000",
            slColor: "#fff",
            slWidth: "24px",
            slHeight: "24px",
            slRadius: "50%"
        },
        btn: {
            showBtn: "true",
            btnWidth: "48px",
            btnHeight: "48px",
            btnBg: "url(img/banbtn.png) no-repeat 0 0",
            posSpace: "25px"
        }
    });
});
```


## 参数配置

- `showSlider`: (默认 `true`) 底部滑块是否显示.

- `showIndex`: (默认 `true`) 底部滑块索引是否显示.

- `slParentBg`: (默认 `rgba(0,0,0,0.5)`) 滑块父层容器底色.

- `slph`: (默认 `48px`) 滑块父层容器高度.

- `slBg`: (默认 `#f00`) 滑块背景颜色.

- `slHBg`: (默认 `#fff`) 鼠标移动到滑块时的背景颜色.

- `slHColor`: (默认 `#000`) 鼠标移动到滑块时的索引颜色.

- `slColor`: (默认 `#fff`) 滑块索引颜色.

- `slWidth`: (默认 `24px`) 滑块宽度.

- `slHeight`: (默认 `24px`) 滑块高度.

- `slRadius`: (默认 `50%`) 滑块形状.

- `showBtn`: (默认 `true`) 是否开启按钮.

- `btnWidth`: (默认 `48px`) 按钮宽度.

- `btnHeight`: (默认 `48px;`) 按钮高度.

- `btnBg`: (默认 `url(img/banbtn.png) no-repeat 0 0`) 按钮样式.

- `posSpace`: (默认 `25px;`) 按钮距离边框距离.


## License

The MIT License (MIT)

Copyright (c) 2016 Kylin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.