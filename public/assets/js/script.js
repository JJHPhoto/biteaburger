$(function () {
  $(".devour-button").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newDevoured");

    var newEatenBurger = {
      devoured: newDevoured,
    };

    // console.log(newDevoured);
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenBurger,
    }).then(function () {
      console.log("Chaned devoured state to:", newDevoured);
      location.reload();
    });
  });
});

$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    let newBurger = {
      name: $("#ca").val().trim(),
      eaten: $("[name=eaten]:checked").val().trim(),
    };

    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("Created a new burger!");
      location.reload();
    });
  });
});
