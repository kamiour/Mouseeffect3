let number = 700;
let radius = 50;
let initialLeft = [];
let initialTop = [];

for (let i = 0; i < number; i++) {
  $("#one").append( '<div id="move-'+i+'" class="move"></div>');
}

let elementsArr = $(".move");
for (let i = 0; i < elementsArr.length; i++) {
  /*elementsArr[i].style.transitionDuration = (4 * (Math.random() + 0.2))+'s';*/
  elementsArr[i].style.transitionDuration = '0.4s';
  elementsArr[i].style.left = (window.innerWidth * Math.random());
  elementsArr[i].style.top = (window.innerHeight * Math.random());
  let diameter = (10 * Math.random() + 5);
  elementsArr[i].style.width = diameter;
  elementsArr[i].style.height = diameter;
  elementsArr[i].style.backgroundColor = 'rgba('+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+', 1)';
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
