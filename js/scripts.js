function pingPong(number) {
  $("#result").empty();
  for(var i = 1; i <= number; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        $("<li class='list-group-item list-group-item-warning'>" + "Ping-Pong" + "</li>").appendTo("#result");
      } else if (i % 5 == 0) {
        $("<li class='list-group-item list-group-item-danger'>" + "Pong" + "</li>").appendTo("#result");
      } else if (i % 3 == 0) {
        $("<li class='list-group-item list-group-item-info'>" + "Ping" + "</li>").appendTo("#result");
      } else {
        $("<li class='list-group-item'>" + i + "</li>").appendTo("#result");
      }
  }

}

function startPong() {
  $("#press-start").hide();
  $(".pong-loop").show();
}

$(document).ready(function() {
  $("form#ping-pong-converter").submit(function(event) {
    event.preventDefault();
    var inputString = parseInt($("input#ping-pong").val());
    var outputString = pingPong(inputString);

    $("#number-list").text(outputString);
    $("#result").show();

  });
});
