let number = 300;
let counter = 0;

for (let i = 0; i < number; i++) {
	$("#one").append( '<div id="move-'+i+'" class="move"></div>')
}

let elementsArr = $(".move");
for (let i = 0; i < elementsArr.length; i++) {
  elementsArr[i].style.transitionDuration = (8 * (Math.random() + 0.1))+'s';
};
let sortedArr = elementsArr.sort(function(num1, num2) {
  return parseFloat(num1.style.transitionDuration) - parseFloat(num2.style.transitionDuration);
});

function spread() {
  for (let i = 0; i < elementsArr.length; i++) {
    elementsArr[i].style.left = (window.innerWidth * Math.random());
    elementsArr[i].style.top = (window.innerHeight * Math.random());
    elementsArr[i].style.backgroundColor = 'rgb('+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+')';
  };
  counter = 1;
}
spread();

$(window).mousemove(function(event) {
  counter = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    sortedArr[i].style.left = (event.pageX);
    sortedArr[i].style.top = (event.pageY);
  }
  $(sortedArr[sortedArr.length-1]).one('transitionend webkitTransitionEnd oTransitionEnd', function () {
    if (counter == 0) {
      spread();
    }
  });
});

