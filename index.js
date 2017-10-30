
var calcMethod = require('lm-ut-calc-platform-method'),
iosBridge = require('./ios/bridge'),
androidBridge = require('./android/bridge')

module.exports=calcMethod({
	android:androidBridge,
	ios:iosBridge
}) 

