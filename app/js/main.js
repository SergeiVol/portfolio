$(function () {
  $(".menu__link").on("click", function (event) {
    event.preventDefault();
    $(".menu__link").removeClass("menu__link--active");
    $(this).toggleClass("menu__link--active");

    $(".card").removeClass("card--open");
    $($(this).attr("href")).toggleClass("card--open");

    $(".card-started ").removeClass("card-started--position");
    $(".card-started").toggleClass("card-started--position");
  });

  $(document).on("click", function (e) {
    if (!$(".card-started, .menu, .card").is(e.target) && $(".card-started, .menu, .card").has(e.target).length === 0) {
      $(".menu__link").removeClass("menu__link--active");
      $(".card-started ").removeClass("card-started--position");
      $(".card").removeClass("card--open");
    }
  });

  $(".toogle-menu").on("click", function (e) {
    e.preventDefault();

    $(".toogle-menu").toggleClass("active");
    $(".menu").toggleClass("menu--active");
  });

  $(document).on("click", function (e) {
    if (!$(".toogle-menu").is(e.target) && $(".toogle-menu").has(e.target).length === 0) {
      $(".toogle-menu").removeClass("active");
      $(".menu").removeClass("menu--active");
    }
  });

  $(".menu__link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

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
  // var marker = new google.maps.Marker({
  // position: myLatLng,
  // map: map,
  //   icon: iconBase + 'parking_lot_maps.png'
  // });
}
