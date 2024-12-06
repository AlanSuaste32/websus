// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}


// display current year

function displayYear() {
    var d = new Date();
    var currentYear = d.getFullYear();

    document.querySelector("#displayDate").innerHTML = currentYear;
}
displayYear();


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(19.58309894353618, -88.0294038852033),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}