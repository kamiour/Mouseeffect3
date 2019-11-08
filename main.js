let number = 600;
let radius = 120;
let initialLeft = [];
let initialTop = [];

for (let i = 0; i < number; i++) {
  $("#one").append( '<div id="move-'+i+'" class="move"></div>');
}

let elementsArr = $(".move");
for (let i = 0; i < elementsArr.length; i++) {
  let diameter = (20 * Math.random() + 8);

  elementsArr[i].style.transitionDuration = '0.3s';
  elementsArr[i].style.left = (window.innerWidth * Math.random());
  elementsArr[i].style.top = (window.innerHeight * Math.random());
  elementsArr[i].style.width = diameter;
  elementsArr[i].style.height = diameter;
  elementsArr[i].style.backgroundColor = 'rgba(255, 255, 255, '+(0.3*Math.random() + 0.1)+'';
  initialLeft[i] = elementsArr[i].style.left;
  initialTop[i] = elementsArr[i].style.top;
};

$(window).mousemove(function(event) {
  function distance(item) {
    return Math.pow(Math.pow((parseFloat(item.style.left) - event.pageX), 2) + Math.pow((parseFloat(item.style.top) - event.pageY), 2), 0.5)
  }

  for (let i = 0; i < elementsArr.length; i++) {
    elementsArr[i].style.left = initialLeft[i];
    elementsArr[i].style.top = initialTop[i];
  }
  
  for (let i = 0; i < elementsArr.length; i++) {
    if (distance(elementsArr[i]) < radius) {
      elementsArr[i].style.left = (event.pageX);
      elementsArr[i].style.top = (event.pageY);
    } else {
      elementsArr[i].style.left = initialLeft[i];
      elementsArr[i].style.top = initialTop[i];
    }
  }
});
