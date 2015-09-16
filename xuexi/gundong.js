
window.onload = function () {
	
	var btn = document.getElementById('btn');
	var time = null;
	var istop = true;
	
	window.onscroll = function(){
		if(!istop){
			clearInterval(time);
		}
		istop = false;
	}
	
	obtn.onclick = function() {
		time = setInterval(function() {
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(-osTop / 5);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
			istop = true;
			if(osTop == 0) {
				clearInterval(time);
			}
		}, 30)
		
	}
	
	
}












