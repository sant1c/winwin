require.config({
paths: {

// plugins
'angular' : "lib/ionic/js/ionic.bundle",
'cordova' : "cordova",
'hscroll' : "js/ionic.hscrollcards", 
'phaser'  : "lib/phaser/phaser.min",


// core
'app' : "app/app",
'coremodule' : "app/coremodule/coremodule",     


// custom library





},
shim :{
	'httpRequest' :{
         deps : ['angular']
	},
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

