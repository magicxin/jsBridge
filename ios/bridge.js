
var iosBridge=null 
function initIosWebView() {
    function setupWebViewJavascriptBridge(callback) {
        if (window.WebViewJavascriptBridge) {
            return callback(WebViewJavascriptBridge);
        }
        if (window.WVJBCallbacks) {
            return window.WVJBCallbacks.push(callback);
        }
        window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        // WVJBIframe.src = 'http://__bridge_loaded__';
        WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
    } 
    try{
        return new Promise(function(resolve, reject){
            window.onerror = function(err) {
                reject && reject(err)
            }
            // alert('start initing ios bridge')
            setupWebViewJavascriptBridge(function(bridge) {
                iosBridge = bridge
                // alert('ios bridge inited')
                resolve && resolve(iosBridge)
            })
        })
    }catch(err){
        alert(err)
        reject && reject(err)
    }
}

module.exports=function(){
    console.log('start init ios bridge')
    if(iosBridge){
        console.log('ios bridge inited')
        return Promise.resolve(iosBridge)
    }else{
        return initIosWebView()
    }
}