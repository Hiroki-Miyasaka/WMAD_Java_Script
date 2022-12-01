// const demoParagraph = $("#demo");
// demoParagraph.hide();
// demoParagraph.html("Next Step...");

// #1
// $(document).ready(function () {
//   const demoParagraph = $("#demo");
//   demoParagraph.hide();
//   demoParagraph.html("Next Step...");
// });

// document.getElementsByName("button");
// function hideParagraph() {
//     document.getElementById("demo")
// }
// #2

$(function () {
  //   $("button").click(function () {
  //     $("#demo").hide();
  //     $(".title").hide();
  //   });

  //   $("button").dblclick(function () {
  //   $("#demo").hide();
  //   $(".title").hide();
  //   });

  //   $("button").mouseenter(function () {
  //     $("#demo").hide();
  //     $(".title").hide();
  //     alert("paragraph and heading element hidden");
  //   });

  //   $("button").click(function () {
  //     $("#demo").css("background-color", "red");
  //     $(".title").css("background-color", "black");
  //     $("#demo").css("color", "white");
  //   });

  //   $("button").on("click", function () {});

  $("#hide").click(function () {
    $("#demo").hide();
    $(".title").hide();
  });

  $("#show").click(function () {
    $("#demo").show();
    $(".title").show();
  });
});
