let number = 10;
let initialLeft = [];
let initialTop = [];
let Coord = [
  {
    x: 100,
    y: 10
  },
  {
    x: 120,
    y: 20
  },
  {
    x: 140,
    y: 40
  },
  {
    x: 150,
    y: 60
  },
  {
    x: 140,
    y: 80
  },
  {
    x: 120,
    y: 90
  },
  {
    x: 100,
    y: 100
  },
  {
    x: 80,
    y: 90
  },
  {
    x: 60,
    y: 80
  },
  {
    x: 40,
    y: 60
  },
]

for (let i = 0; i < number; i++) {
  $("#one").append( '<div id="move-'+i+'" class="move"></div>');
}

let elementsArr = $(".move");
for (let i = 0; i < elementsArr.length; i++) {
  let diameter = 10;

  elementsArr[i].style.transitionDuration = '1s';
  elementsArr[i].style.left = (window.innerWidth * Math.random());
  elementsArr[i].style.top = (window.innerHeight * Math.random());
  elementsArr[i].style.width = diameter;
  elementsArr[i].style.height = diameter;
  elementsArr[i].style.backgroundColor = 'rgba(255, 255, 255, 1)';
  initialLeft[i] = elementsArr[i].style.left;
  initialTop[i] = elementsArr[i].style.top;
};

$('.btn').hover(function(event) {

  for (let i = 0; i < elementsArr.length; i++) {
    elementsArr[i].style.left = Coord[i].x + 400;
    elementsArr[i].style.top = Coord[i].y;
  }

});

$('.btn').mouseout(function(event) {

  for (let i = 0; i < elementsArr.length; i++) {
    elementsArr[i].style.left = initialLeft[i];
    elementsArr[i].style.top = initialTop[i];
  }

});