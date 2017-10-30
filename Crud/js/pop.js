$(document).ready(function(){
 $("#forpop").click(function(){
  showpopup();
 });
	
function showpopup(){
 $("#popup_box").fadeToggle();
 $("#popup_box").css({"visibility":"visible","display":"block"});
}