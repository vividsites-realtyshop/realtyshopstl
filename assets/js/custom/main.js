function domReady(fn) {
    // If we're early to the party
    document.addEventListener("DOMContentLoaded", fn);
    // If late; I mean on time.
    if (document.readyState === "interactive" || document.readyState === "complete" ) {
        fn();
    }
}

domReady(function() {
    console.log("extra script loaded");
    const listings = document.querySelectorAll(".house-grid-item");
    for ( let i = 0; i < listings.length; i++ ) {
        listings[i].addEventListener("mouseover", function() {
            if (this.classList.contains("activated")) return null;
            const fav = this.querySelector(".icon-fav");
            if (fav) fav.dataset.address = this.getAttribute("aria-label");
            this.classList.add("activated");
        })
        console.log("listing");
    }
});
