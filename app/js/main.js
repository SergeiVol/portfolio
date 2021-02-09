$(function () {
  $(".menu__link").on("click", function (event) {
    event.preventDefault();
    $(".menu__link").removeClass("menu__link--active");
    $(this).toggleClass("menu__link--active");

    $(".logo").removeClass("logo--active");

    $(".card").removeClass("card--open");
    $($(this).attr("href")).toggleClass("card--open");

    $(".card-started ").removeClass("card-started--position");
    $(".card-started").toggleClass("card-started--position");
  });

  $(document).on("click", function (e) {
    if (
      !$(".card-started, .menu, .card").is(e.target) &&
      $(".card-started, .menu, .card").has(e.target).length === 0
    ) {
      $(".menu__link").removeClass("menu__link--active");
      $(".card-started ").removeClass("card-started--position");
      $(".card").removeClass("card--open");
    }
  });

  $(".logo").on("click", function (e) {
    e.preventDefault();
    $(".logo").removeClass("logo--active");
    $(this).toggleClass("logo--active");

    $(".menu__link").removeClass("menu__link--active");
  });

  $(".toogle-menu").on("click", function (e) {
    e.preventDefault();

    $(".toogle-menu").toggleClass("active");
    $(".menu").toggleClass("menu--active");
  });

  $(document).on("click", function (e) {
    if (
      !$(".toogle-menu").is(e.target) &&
      $(".toogle-menu").has(e.target).length === 0
    ) {
      $(".toogle-menu").removeClass("active");
      $(".menu").removeClass("menu--active");
    }
  });

  // $(".menu__link, .logo").on("click", function (event) {
  //   event.preventDefault();
  //   var id = $(this).attr("href"),
  //     top = $(id).offset().top;
  //   $("body,html").animate({ scrollTop: top }, 1500);
  // });

  //Smooth scrolling when click to nav
  $(".menu > ul > li > a, .logo").click(function (e) {
    e.preventDefault();
    var curLink = $(this);
    var scrollPoint = $(curLink.attr("href")).position().top;
    $("body,html").animate(
      {
        scrollTop: scrollPoint,
      },
      1000
    );
  });

  $(window).scroll(function () {
    onScrollHandle();
  });

  function onScrollHandle() {
    //Navbar shrink when scroll down
    // $(".navbar-default").toggleClass("navbar-shrink", $(this).scrollTop() > 50);

    //Get current scroll position
    var currentScrollPos = $(document).scrollTop() + 70;

    //Iterate through all node
    $(".menu > ul > li > a").each(function () {
      var curLink = $(this);
      var refElem = $(curLink.attr("href"));
      //Compare the value of current position and the every section position in each scroll
      if (
        refElem.position().top <= currentScrollPos &&
        refElem.position().top + refElem.height() > currentScrollPos
      ) {
        //Remove class active in all nav
        $(".menu > ul > li > a").removeClass("menu__link--active");
        //Add class active
        curLink.addClass("menu__link--active");
      } else {
        curLink.removeClass("menu__link--active");
      }
    });

    $(".logo").each(function () {
      var curLink = $(this);
      var refElem = $(curLink.attr("href"));
      //Compare the value of current position and the every section position in each scroll
      if (
        refElem.position().top <= currentScrollPos &&
        refElem.position().top + refElem.height() > currentScrollPos
      ) {
        //Remove class active in all nav
        $(".logo").removeClass("logo--active");
        //Add class active
        curLink.addClass("logo--active");
      } else {
        curLink.removeClass("logo--active");
      }
    });
  }
});

// Google map
function initMap() {
  const myLatLng = { lat: 56.83631896174271, lng: 60.6110037515424 };
  const iconBase = "../images/icons/";
  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 10,
    disableDefaultUI: true,
    fullscreenControl: true,
    zoomControl: true,
    streetViewControl: false,
    styles: [
      {
        featureType: "water",
        stylers: [
          {
            color: "#19a0d8",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            weight: 6,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#e85113",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#efe9e4",
          },
          {
            lightness: -40,
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#efe9e4",
          },
          {
            lightness: -20,
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [
          {
            lightness: 100,
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            lightness: -100,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.icon",
      },
      {
        featureType: "landscape",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "landscape",
        stylers: [
          {
            lightness: 20,
          },
          {
            color: "#efe9e4",
          },
        ],
      },
      {
        featureType: "landscape.man_made",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [
          {
            lightness: 100,
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            lightness: -100,
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            hue: "#11ff00",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.stroke",
        stylers: [
          {
            lightness: 100,
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.icon",
        stylers: [
          {
            hue: "#4cff00",
          },
          {
            saturation: 58,
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#f0e4d3",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#efe9e4",
          },
          {
            lightness: -25,
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#efe9e4",
          },
          {
            lightness: -10,
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
    ],
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    icon: iconBase + "map-pin.svg",
  });
}

// Форма валидации и отправки
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add("sending");
      let response = await fetch("mail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        form.reset();
        form.classList.remove("sending");
      } else {
        alert("Ошибка");
        form.classList.remove("sending");
      }
    } else {
      alert("Заполните обязательные поля");
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.classList.add("error");
  }

  function formRemoveError(input) {
    input.classList.remove("error");
  }

  //Функция теста email
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
