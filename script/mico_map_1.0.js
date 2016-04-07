/**
 * Created by Sin on 16-04-07.
 */
var gaodeMap = null;
var showTag = false;
function initMap() {

	gaodeMap = api.require('aMap');

	console.log("init", gaodeMap, gaodeMap != null);
}

function openMap() {
	console.log("openMap", gaodeMap != null);
	if (null != gaodeMap && !showTag) {

		gaodeMap.open({
			rect : {
				x : 0,
				y : 0,
				w : 360,
				h : 480
			},
			center : {
				lon : 121.215253,
				lat : 31.287922
			},
			zoomLevel : 17,
			showUserLocation : false,
			fixedOn : api.frameName,
			fixed : true
		}, function(ret) {
			console.log('地图打开成功');
			//			gaodeMap.stopLocation();
			//			gaodeMap.setZoomLevel({
			//				level : 18,
			//				animation : true
			//			});
			//			gaodeMap.getZoomLevel(function(ret) {
			//				console.log(JSON.stringify(ret.level));
			//			});
			addAnnotation();

			//			setCenter();
		});
		showTag = true;
	} else {
		showMap();
	}
}

function closeMap() {
	console.log("closeMap", gaodeMap != null);
	if (null != gaodeMap) {
		console.log("closeMap");
		gaodeMap.close();
		gaodeMap = null;
		showTag = false;
	}
}

function showMap() {
	console.log("showMap", gaodeMap != null);
	if (null != gaodeMap) {
		gaodeMap.show();
	}
}

function hideMap() {
	console.log("hideMap", gaodeMap != null);
	if (null != gaodeMap) {
		gaodeMap.hide();
	}
}

function setCenter() {
	gaodeMap.setCenter({
		coords : {
			lon : 121.224076,
			lat : 31.290092
		},
		animation : false
	});
}

function addAnnotation() {
	gaodeMap.addAnnotations({
		annotations : [{
			id : 1,
			lon : 121.213923,
			lat : 31.287518
		}, {
			id : 2,
			lon : 121.21549,
			lat : 31.286615
		}, {
			id : 3,
			lon : 121.217131,
			lat : 31.288893
		}, {
			id : 4,
			lon : 121.214916,
			lat : 31.289338
		}],
		icons : ['widget://image/mapicon.png'],
		draggable : false,
		timeInterval : 2.0
	}, function(ret) {
		if (ret.eventType == 'click') {
			console.log(ret.id);
		}
	});
}