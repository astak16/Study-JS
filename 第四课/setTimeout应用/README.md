用命名空间定义`byClass`，`byId`，`byTagName`。
其中`byClass`最复杂：
1. 定义`aClass`存储最终`class`的数组
2. 定义`reClass`，把传递进来的`class`变成正则存进去
3. 定义`aElem`，存储用`byTagName`获取传进来标签内的所有子元素
4. 遍历这个数组`aElem`数组，如果符合正则就把它`push`到`aClass`

