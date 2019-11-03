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
    if (elementsArr[i].style.left < event.pageX) {
      elementsArr[i].style.left += 20;
    } else {
      elementsArr[i].style.left += -20;
    }
    
    //elementsArr[i].style.top = (event.pageY)*0.3;
  }
});
