let number = 200;
let initialLeft = [];
let initialTop = [];
let points = [];
let maxWidth = 300;

for (let i = 0; i < number; i++) {
  $("#one").append( '<div id="move-'+i+'" class="move"></div>');
}

let elementsArr = $(".move");
for (let i = 0; i < elementsArr.length; i++) {
  let diameter = 4;
  elementsArr[i].style.transitionDuration = '1s';
  elementsArr[i].style.left = (window.innerWidth * Math.random());
  elementsArr[i].style.top = (window.innerHeight * Math.random());
  elementsArr[i].style.width = diameter;
  elementsArr[i].style.height = diameter;
  elementsArr[i].style.backgroundColor = '#fffc00';
  initialLeft[i] = elementsArr[i].style.left;
  initialTop[i] = elementsArr[i].style.top;
};

for (let j = 1; j<4; j++) {
  $('#btn'+j+'').hover(function() {
    let length = $('path')[j-1].getTotalLength();
    for (let i = 0; i < elementsArr.length; i++) {
      points[i] = $('path')[j-1].getPointAtLength(i*length/number);
    }
  
    let svgWidth = points.sort((a, b) => b.x - a.x )[0].x - points.sort((a, b) => a.x - b.x )[0].x;
    let svgHeight = points.sort((a, b) => b.y - a.y )[0].y - points.sort((a, b) => a.y - b.y )[0].y;
  
    for (let i = 0; i < elementsArr.length; i++) {
      elementsArr[i].style.left = maxWidth * points[i].x/svgWidth + window.innerWidth/2 - maxWidth/2;
      elementsArr[i].style.top = (svgHeight/svgWidth) * maxWidth * points[i].y/svgHeight + window.innerHeight/2 - (maxWidth*(svgHeight/svgWidth))/2;
    }
    $('#btn'+j+'')[0].innerHTML = 'Unhover me #'+j+'';
  });
  
  $('#btn'+j+'').mouseout(function() {
    for (let i = 0; i < elementsArr.length; i++) {
      elementsArr[i].style.left = initialLeft[i];
      elementsArr[i].style.top = initialTop[i];
    }
    $('#btn'+j+'')[0].innerHTML = 'Hover me #'+j+'';
  });
};