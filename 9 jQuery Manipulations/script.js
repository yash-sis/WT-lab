$(document).ready(function () {
  //Append content
  $("#appendButton").click(function () {
    $("#existingParagraph").append("<p>This content is appended.</p>");
    $("#existingList").append("<li>Appended item</li>");
  });

  //Animate element
  $("#animateButton").click(function () {
    $("#animateBox").animate(
      {
        width: "200px",
        height: "200px",
      },
      1000
    );
  });

  //Animate and change color
  $("#colorAnimateButton").click(function () {
    $("#colorBox").animate(
      {
        width: "200px",
        height: "200px",
      },
      {
        duration: 1000,
        step: function (now, fx) {
          if (fx.prop === "width") {
            // Change color dynamically based on width
            $(this).css("background-color", `rgb(${Math.round(now)}, 52, 219)`);
          }
        },
      }
    );
  });
});
