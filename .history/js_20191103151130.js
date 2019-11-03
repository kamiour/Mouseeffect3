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
    console.log(event.pageX);
    console.log(event.pageY);
    elementsArr[i].style.left = (event.pageX);
    elementsArr[i].style.top = (event.pageY);
  }
});
