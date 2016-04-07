/**
 * Created by Sin on 16-04-07.
 */
var device_id = "d64f517c/c8934691813c";
var micoobj = null;

function initMQTT() {
	//首先引用MiCOmqtt
	micoobj = api.require('mico');

	var host = "api.easylink.io";
	var port = "1883";
	var username = "admin";
	var password = "admin";

	//clientID，需要按照此标准来定义：v1-app-[MAC]	版本号-app-手机MAC(12位)
	var clientID = "v1-app-" + parseInt(Math.random() * (1000000000000), 12);
	var topic = device_id + '/out/#';

	micoobj.startMqtt({
		host : host,
		port : port,
		username : username,
		password : password,
		clientID : clientID,
		topic : topic
	}, function(ret, err) {
		if (ret.status == "Connected") {
			console.log("startMqtt","连接成功");
		} else {
			console.log("startMqtt",ret);
		}
	});
}

function stopMQTT() {
	micoobj.stopMqtt(function(ret, err) {
		alert(JSON.stringify(ret));
	});
}

function publishcmd(topic, command) {
	var qos = 0;
	var retained = false;
	micoobj.publishCommand({
		topic : topic,
		command : command,
		qos : qos,
		retained : retained
	}, function(ret, err) {
		console.log("publishcmd",ret);
	});
}