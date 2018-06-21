[预览链接](https://astak16.github.io/Study-JS/%E7%AC%AC%E4%B8%80%E8%AF%BE/%E6%8E%A7%E5%88%B6div%E5%B1%9E%E6%80%A7/index.html)
### 总结
通过 JS 切换`class`来改变样式。

写了两种方法，先通过`getElementById`获取到要操作对象的`id`，使用`addEventListener`监听事件，点击某元素时，切换对应的`class`

方法一：通过调用`DOM`提供的`classList``add``remove` API 实现切换`class` 。

方法二：自己写了`addClass``removeClass`函数实现切换`class`，这里多了一个判断`hasClass`判断函数，用来检测是`class`是否存在，存在无需重复添加。
