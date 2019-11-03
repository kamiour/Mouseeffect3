for (let i = 0; i<50; i++) {
	$("#one").append( '<div id="move-'+i+'" class="move"></div>')
}

let elementsArr = $(".move");

for (let i = 0; i < elementsArr.length; i++) {
  elementsArr[i].style.left = (100 * Math.random())+'%';
  elementsArr[i].style.top = (100 * Math.random())+'%';
}

for (let i = 0; i < elementsArr.length; i++) {
  elementsArr[i].style.left = (100 * Math.random())+'%';
  elementsArr[i].style.top = (100 * Math.random())+'%';
}

$(window).mousemove(function(event) {
  for (let i = 0; i < elementsArr.length; i++) {
    elementsArr[i].style.left = (event.pageX)*0.3;
    elementsArr[i].style.top = (event.pageY)*0.3;
  }
});
