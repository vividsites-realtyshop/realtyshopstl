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
    const listings = document.querySelectorAll(".md-house");
    for ( let i = 0; i < listings.length; i++ ) {
        listings[i].addEventListener("mouseover", function() {
            if (this.classList.contains("activated")) return null;
            const fav = this.querySelector("icon-fav");
            if (fav) fav.setAttribute("data-address", this.getAttribute("aria-label"));
        })
        console.log("listing");
    }
});
