$(window).mousemove(function(event) {
    $("#two").css({
      "margin-left": (event.pageX * 0.1),
      "margin-top": (event.pageY * 0.1)
    });
    $("#three").css({
      "margin-left": -(event.pageX * 0.2),
      "margin-top": -(event.pageY * 0.2)
    });
    $("#four").css({
      "margin-left": -(event.pageX * 0.3),
      "margin-top": -(event.pageY * 0.3)
    });
  });
  