let number = 200;

for (let i = 0; i < number; i++) {
	$("#one").append( '<div id="move-'+i+'" class="move"></div>')
}

let elementsArr = $(".move");

function spread() {
  for (let i = 0; i < elementsArr.length; i++) {
    elementsArr[i].style.left = (window.innerWidth * Math.random());
    elementsArr[i].style.top = (window.innerHeight * Math.random());
    elementsArr[i].style.transitionDuration = (8 * (Math.random() + 0.1))+'s';
    elementsArr[i].style.backgroundColor = 'rgb('+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+')';
  }
}
spread();

$(window).mousemove(function(event) {
  for (let i = 0; i < elementsArr.length; i++) {
    elementsArr[i].style.left = (event.pageX);
    elementsArr[i].style.top = (event.pageY);
  }
});
