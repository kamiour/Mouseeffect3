let number = 200;
let initialLeft = [];
let initialTop = [];
let points = [];

for (let i = 0; i < number; i++) {
  $("#one").append( '<div id="move-'+i+'" class="move"></div>');
}

let elementsArr = $(".move");
for (let i = 0; i < elementsArr.length; i++) {
  let diameter = (3 * Math.random() + 2);
  elementsArr[i].style.transitionDuration = '1.5s';
  elementsArr[i].style.left = (window.innerWidth * Math.random());
  elementsArr[i].style.top = (window.innerHeight * Math.random());
  elementsArr[i].style.width = diameter;
  elementsArr[i].style.height = diameter;
  elementsArr[i].style.backgroundColor = '#fffc00';
  initialLeft[i] = elementsArr[i].style.left;
  initialTop[i] = elementsArr[i].style.top;
};

let length = $('path')[0].getTotalLength();
for (let i = 0; i < elementsArr.length; i++) {
  points[i] = $('path')[0].getPointAtLength(i*length/number);
}

$('#btn1').hover(function(event) {
  for (let i = 0; i < elementsArr.length; i++) {
    elementsArr[i].style.left = points[i].x*8 + window.innerWidth/2 - 150;
    elementsArr[i].style.top = points[i].y*8 + window.innerHeight/2 - 200;
  }
});

$('#btn1').mouseout(function(event) {
  for (let i = 0; i < elementsArr.length; i++) {
    elementsArr[i].style.left = initialLeft[i];
    elementsArr[i].style.top = initialTop[i];
  }
});
