var GStar=function(options){try{var _model="<div class='gStarPanel' id='{id}'>{ctt}</div>";var _model2="<div class='u' id='su{0}'><img src='_img/sys/star{1}.gif' /></div>";var sets=jQuery.extend({ID:"gStar"+Math.random().toString().replace(".",""),X:0,Y:0,Z:100,R:100,rLV:0.5,N:3,TIME:500,Type:1},options);begin();end();function begin(){var A0=Math.round(Math.random()*180);var pn=_model.replace("{id}",sets.ID);var html="";for(var k=0;k<sets.N;k++){var st=_model2.replace("{0}",k).replace("{1}",sets.Type);html+=st}pn=pn.replace("{ctt}",html);$("body").append(pn);var stepA=360/sets.N;var po=document.getElementById(sets.ID);var $po=$(po);$po.css({left:sets.X,top:sets.Y,zIndex:sets.Z});var os=$po.find(".u");for(var i=0;i<os.length;i++){var $o=$(os[i]);$o.css({width:sets.R,height:sets.R,left:-sets.R/2,top:-sets.R/2});var a=stepA*i+A0;var pt=coordinateSystemConversion_j2d(sets.R,a);gogo($o,pt.x,pt.y)}}function gogo($o,x,y){var r=parseInt(sets.R*sets.rLV);$o.show(0);$o.animate({left:x-r/2,top:y-r/2,width:r,height:r,opacity:0},sets.TIME)}function end(){setTimeout(function(){$("#"+sets.ID).remove()},sets.TIME)}function coordinateSystemConversion_j2d(r,a){var A=Math.PI*a/180;var point={x:r*Math.cos(A),y:r*Math.sin(A)};return point}}catch(ex){alert("GStar err: "+ex.message)}};