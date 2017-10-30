# lm-na-bridge
适用于ios及android webview的桥接封装 

ios基于[marcuswestin/WebViewJavascriptBridge](https://github.com/marcuswestin/WebViewJavascriptBridge)

android基于[lzyzsd/JsBridge](https://github.com/lzyzsd/JsBridge)


##usage
安装
`npm install https://github.com/limingtech-front-end/lm-na-bridge --save`

引用
`import bridge from 'lm-na-bridge'`

调用原生方法
```
bridge().then((bridgeConnection)=>{
  //detial usage in WebViewJavascriptBridge || JsBridge documents
  bridgeConnection.callHandler('nativeMethodName', {/*params in obj*/}, (response)=>{
      //response is a json string
			doSomething(JSON.parse(response))
	})
},(err)=>{
  console.error(error)
})
```

注册webview方法供原生调用
待添加
"# jsBridge" 
