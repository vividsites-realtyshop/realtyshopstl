let listingsInterval;
let listings = false;

function domReady(fn) {
    // If we're early to the party
    document.addEventListener("DOMContentLoaded", fn);
    // If late; I mean on time.
    if (document.readyState === "interactive" || document.readyState === "complete" ) {
        fn();
    }
}

function setUpListings() {
    clearInterval(listingsInterval);
    for ( let i = 0; i < listings.length; i++ ) {
        console.log("listingStart");
        listings[i].addEventListener("mouseover", function() {
            if (this.classList.contains("activated")) return null;
            const fav = this.querySelector(".icon-fav");
            if (fav) fav.dataset.address = this.getAttribute("aria-label");
            this.classList.add("activated");
        });
        console.log("listingEnd");
    }
}

domReady(function() {
    console.log("extra script loaded");
    // Initially, just setting this up on Homepage
    if( document.body.classList.contains("home") ) {
        listingsInterval = setInterval(() => {
            listings = document.querySelectorAll(".house-grid-item");
            if( listings && listings.length > 0 ) setUpListings();
        }, 1000);
        setTimeout(() => {
            clearInterval(listingsInterval);
        }, 15000 );
    }
});
