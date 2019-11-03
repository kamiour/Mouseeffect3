for (let i = 0; i<50; i++) {
	$("#one").append( '<div id="move-'+i+'" class="move"></div>')
}

let elementsArr = $(".move");
console.log(elementsArr);

/*for (let i = 0; i < newAr.length; i++) {
	newAr[i].css({
  	"left": (Math.random() * 100),
    "top": (Math.random() * 100),
  });
}
*/

/*$(window).mousemove(function(event) {
  $("#two").css({
    "left": (event.pageX),
    "top": (event.pageY)
  });
  $("#three").css({
    "left": (event.pageX),
    "top": (event.pageY)
  });
  $("#four").css({
    "left": (event.pageX),
    "top": (event.pageY)
  });
});
*/