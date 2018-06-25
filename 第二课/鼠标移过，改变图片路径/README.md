[预览链接]()

当鼠标进入小图片时，对应的小图片就会显示在左上角的大图片框中。
大图片框中的图片是通过 JS 动态生成的，用`replace`替换匹配的字符。
小图片用的是`samll_1.jpg`，大图片用的是`big_1.jpg`，所以当鼠标进入小图片时，替换掉`samll`就可以了，因为大图片的`src`等于小图片的`src`。

`replace`替换匹配的字符
```
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...
```