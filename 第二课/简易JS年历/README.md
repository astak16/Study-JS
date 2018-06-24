[预览链接](https://astak16.github.io/Study-JS/%E7%AC%AC%E4%BA%8C%E8%AF%BE/%E7%AE%80%E6%98%93JS%E5%B9%B4%E5%8E%86/index.html)

这里面`3*4`布局用下面方法，间隙部分用`padding`或`margin`补
```
ul{
	display: flex;
	flex-wrap: wrap;
	width:350px;
	justify-content: space-around;
}
li{
	width:100px;
	height: 100px;
}
```