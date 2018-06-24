[预览链接]()

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