### 总结
通过 JS 切换`class`来改变样式。
写了两种方法，先通过`getElementById`获取到要操作对象的`id`，使用`addEventListener`监听事件，点击某元素时，切换对应的`class`
方法一：通过调用`DOM`提供的`classList``add``remove` API 实现切换`class` 。
方法二：自己写了`addClass``removeClass`函数实现切换`class`，这里多了一个判断`hasClass`判断函数，用来检测是`class`是否存在，存在无需重复添加。
