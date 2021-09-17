"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("extra script loaded");
  var listings = document.querySelectorAll(".md-house");

  for (var i = 0; i < listings.length; i++) {
    listings[i].addEventListener("mouseover", function () {
      if (this.classList.contains("activated")) return null;
      var fav = this.querySelector("icon-fav");
      if (fav) fav.setAttribute("data-address", this.getAttribute("aria-label"));
    });
    console.log("listing");
  }
});