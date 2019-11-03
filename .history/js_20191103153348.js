for (let i = 0; i<50; i++) {
	$("#one").append( '<div id="move-'+i+'" class="move"></div>')
}

let elementsArr = $(".move");

for (let i = 0; i < elementsArr.length; i++) {
  elementsArr[i].style.left = (window.innerWidth * Math.random());
  elementsArr[i].style.top = (window.innerHeight * Math.random());
}

$(window).mousemove(function(event) {
  for (let i = 0; i < elementsArr.length; i++) {
    if (elementsArr[i].offsetLeft < event.pageX) {
      elementsArr[i].style.left = event.pageX-100;
    } else {
      elementsArr[i].style.left = elementsArr[i].style.left + 20;
    }
    elementsArr[i].style.top = (event.pageY);
  }
});
