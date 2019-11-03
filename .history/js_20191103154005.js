for (let i = 0; i<50; i++) {
	$("#one").append( '<div id="move-'+i+'" class="move"></div>')
}

let elementsArr = $(".move");

for (let i = 0; i < elementsArr.length; i++) {
  elementsArr[i].style.left = (window.innerWidth * Math.random());
  elementsArr[i].style.top = (window.innerHeight * Math.random());
  elementsArr[i].style.transitionDuration = (10 * (Math.random()+1))+'s';
}

$(window).mousemove(function(event) {
  for (let i = 0; i < elementsArr.length; i++) {
    elementsArr[i].style.left = (event.pageX);
    elementsArr[i].style.top = (event.pageY);
  }
});
