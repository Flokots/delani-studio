// User Interface Logic
$(document).ready(function () {
  //Toggle Design Description and logo display
  $("#design").click(function () {
    $(".design-description-hidden").toggle();
    $(".design-logo-showing").toggle();
  });

  //Toggle Development Description and logo display
  $("#dev").click(function () {
    $(".dev-description-hidden").toggle();
    $(".dev-logo-showing").toggle();
  });

  //Toggle Product Description and logo display
  $("#product").click(function () {
    $(".product-description-hidden").toggle();
    $(".product-logo-showing").toggle();
  });

  //Black Grey Theme Hover
  $("#b-g-theme").hover(function () {
    $(".b-g-theme-image").addClass("image-opacity");
    $(".b-g-theme-middle").addClass("middle-opacity");
  },
    function () {
      $(".b-g-theme-image").removeClass("image-opacity");
      $(".b-g-theme-middle").removeClass("middle-opacity");
    });

  //Mighty Ontario Security Hover
  $("#mighty-ontario").hover(function () {
    $(".mighty-ontario-image").addClass("image-opacity");
    $(".mighty-ontario-middle").addClass("middle-opacity");
  },
    function () {
      $(".mighty-ontario-image").removeClass("image-opacity");
      $(".mighty-ontario-middle").removeClass("middle-opacity");
    });

  //Pyramids
  $("#pyramids").hover(function () {
    $(".pyramids-image").addClass("image-opacity");
    $(".pyramids-middle").addClass("middle-opacity");
  },
    function () {
      $(".pyramids-image").removeClass("image-opacity");
      $(".pyramids-middle").removeClass("middle-opacity");
    });

  //Jim Carrey
  $("#jim-carrey").hover(function () {
    $(".jim-carrey-image").addClass("image-opacity");
    $(".jim-carrey-middle").addClass("middle-opacity");
  },
    function () {
      $(".jim-carrey-image").removeClass("image-opacity");
      $(".jim-carrey-middle").removeClass("middle-opacity");
    });

  //Have a Good Day
  $("#good-day").hover(function () {
    $(".good-day-image").addClass("image-opacity");
    $(".good-day-middle").addClass("middle-opacity");
  },
    function () {
      $(".good-day-image").removeClass("image-opacity");
      $(".good-day-middle").removeClass("middle-opacity");
    });

  //Input Forms
  $("#input-forms").hover(function () {
    $(".input-forms-image").addClass("image-opacity");
    $(".input-forms-middle").addClass("middle-opacity");
  },
    function () {
      $(".input-forms-image").removeClass("image-opacity");
      $(".input-forms-middle").removeClass("middle-opacity");
    });

  //Burned Logo Mock-Up
  $("#b-l-mockup").hover(function () {
    $(".b-l-mockup-image").addClass("image-opacity");
    $(".b-l-mockup-middle").addClass("middle-opacity");
  },
    function () {
      $(".b-l-mockup-image").removeClass("image-opacity");
      $(".b-l-mockup-middle").removeClass("middle-opacity");
    });

  //Giraffe Restaurant
  $("#giraffe-restaurant").hover(function () {
    $(".giraffe-restaurant-image").addClass("image-opacity");
    $(".giraffe-restaurant-middle").addClass("middle-opacity");
  },
    function () {
      $(".giraffe-restaurant-image").removeClass("image-opacity");
      $(".giraffe-restaurant-middle").removeClass("middle-opacity");
    })
});

//Back-End Logic (Business Logic)

$(document).ready(function() {
  $("form").submit(function(event) {
      var name = $("input#name").val();
      alert(`${name}, we have received your message. Thank you for reaching out to us.`);
      ("form").reset();
      event.preventDefault();
      
  });
});