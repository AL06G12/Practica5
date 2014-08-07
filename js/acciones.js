//JavaScript
	var audio ;
	
$(document).ready(function(e){
	$("#Principal").height($("#page").height());
	document.addEventListener("deviceready",function(){
		
		
	
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('do','audio/C.mp3',function(msg){},function(msg){alert ('error: '+msg);});
		audio.preloadFX('re','audio/C.mp3',function(msg){},function(msg){alert ('error: '+msg);});
		audio.preloadFX('mi','audio/C.mp3',function(msg){},function(msg){alert ('error: '+msg);});
		audio.preloadFX('fa','audio/C.mp3',function(msg){},function(msg){alert ('error: '+msg);});
		audio.preloadFX('sol','audio/C.mp3',function(msg){},function(msg){alert ('error: '+msg);});
		audio.preloadFX('la','audio/C.mp3',function(msg){},function(msg){alert ('error: '+msg);});
		audio.preloadFX('si','audio/C.mp3',function(msg){},function(msg){alert ('error: '+msg);});
		
		
	
	
	});//deciceready
	});//ready