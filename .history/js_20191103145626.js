for (let i = 0; i<50; i++) {
	$("#one").append( '<div id="move-'+i+'" class="move"></div>')
}

let elementsArr = $(".move");

for (let i = 0; i < elementsArr.length; i++) {
	elementsArr[i].style({
  	"left": (Math.random() * 100),
    "top": (Math.random() * 100),
  });
}


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