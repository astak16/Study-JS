[预览链接](https://astak16.github.io/Study-JS/%E7%AC%AC%E4%B8%89%E8%AF%BE/%E5%80%92%E8%AE%A1%E6%97%B6/index.html)

1. 先获取到两个分和秒的时间
2. 把他们化成秒，在做倒计时
3. 分：用除法， 秒：用取余，要用正则做判断，如果是个位数要在前面补`0`，`replace(/^(\d)$/,'0$1')`