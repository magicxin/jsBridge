
var androidBridge = null

function initAndroidWebView() {
    function connectWebViewJavascriptBridge(callback) {
        // alert('start init android bridge')
        if (window.WebViewJavascriptBridge) {
            callback(WebViewJavascriptBridge)
        } else {
            document.addEventListener(
                'WebViewJavascriptBridgeReady',
                function() {
                    callback(WebViewJavascriptBridge)
                },
                false
            ) 
        }
    }
    try{

        return new Promise(function(resolve, reject){
            window.onerror = function(err) {
                reject && reject(err)

            }
            // alert('start initing android bridge')
            connectWebViewJavascriptBridge(function(bridge) {
                // alert('android bridge inited')
                
                androidBridge = bridge

                console.log('android bridge inited')
                resolve && resolve(androidBridge)
            })
        }) 
    }catch(err){
        alert(err)
        reject && reject(err)
    }

}


module.exports=function() {
    console.log('start init android bridge')
    if (androidBridge) {
        console.log('android bridge cached')
        return Promise.resolve(androidBridge)
    } else {
        return initAndroidWebView()
    }
}
