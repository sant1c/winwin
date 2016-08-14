require.config({
paths: {
'angular' : "lib/ionic/js/ionic.bundle",
'cordova' : "cordova",
'hscroll'  : "js/ionic.hscrollcards", 
'phaser'  : "lib/phaser/phaser.min",

'app' : "app/app",
'coremodule' : "app/coremodule/coremodule"     
},
shim :{
	'hscroll' : {
         deps : ['angular']
	}, 

	'app' : {
		deps : ['angular', 'hscroll', 'cordova', 'coremodule']

	},
	'coremodule' : {
		deps : ["angular",'hscroll',"cordova"]
	}
	
}
});

require(['coremodule'], function(){


})

