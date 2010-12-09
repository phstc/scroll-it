javascript:(function(){
	 /*@author Pablo Cantero - http://pablocantero.com*/
	if(window.scrollIt === undefined){
		window.scrollIt = {
			intervalId: null
		};
	}
	function getScrollMaxSize(){
		return document.body.clientHeight;
	};
	function getScrollCurrentSize(){
		return document.documentElement.scrollTop;
	};
	window.scrollIt.initialSize = getScrollCurrentSize();
	window.scrollIt.scrolled = getScrollCurrentSize();
	var scroll = function(){
		alert('1');
		window.scrollIt.scrolled += 10;
		window.scrollTo(0, window.scrollIt.scrolled);
		if(window.scrollIt.scrolled >= getScrollMaxSize()){
			window.scrollIt.scrolled = window.scrollIt.initialSize;
		} 
	};
	var stop = function(){
		window.clearInterval(window.scrollIt.intervalId);
		window.scrollIt.intervalId = null;
	}
	var start = function(){
		alert('2');
		window.scrollIt.intervalId = window.setInterval(scroll, 1000);
	}
	start();
})()