$(function () {
  $(".devour-button").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("devoured");

    var newEatenBurger = {
      devoured: newDevoured,
    };

    console.log(newDevoured);
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
  $(".add-burger").on("submit", function (event) {
    event.preventDefault();

    let newBurger = {
      name: $("#burger").val().trim(),
      // eaten: $("[name=eaten]:checked").val().trim(),
    };

    console.log(newBurger);

    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("Created a new burger!");
      location.reload();
    });
  });
});
