Util.addStyle('https://vividsites-realtyshop.github.io/realtyshopstl/main.min.css?v1.1.4.7');

document.addEventListener("DOMContentLoaded", () => {
    var actionBsStl = document.getElementById('action-bs-stl');
    if(actionBsStl) actionBsStl.remove();
    document.documentElement.style.setProperty("--font-title", "'Bebas Neue', sans-serif");
    document.documentElement.style.setProperty("--font-light", "'Open Sans', sans-serif");
    document.documentElement.style.setProperty("--font-normal", "'Open Sans', sans-serif");
    document.documentElement.style.setProperty("--font-medium", "'Open Sans', sans-serif");
    document.documentElement.style.setProperty("--font-bold", "'Open Sans', sans-serif");
    document.documentElement.style.setProperty("--mg-title-size", "28px");
    document.documentElement.style.setProperty("--mg-title-size-mobile", "20px");
    document.documentElement.style.setProperty("--mg-title-letter-spacing", "0.05em");
    document.documentElement.style.setProperty("--color-title", "#222");
    document.documentElement.style.setProperty("--color-text", "#222");
});

setTimeout(() => {
    document.querySelector('.search-more .more-list .section-box .section .inputtext-area .input_0 input[placeholder="Min Year Built"]').placeholder = 'Oldest Year Built';
    document.querySelector('.search-more .more-list .section-box .section .inputtext-area .input_1 input[placeholder = "Max Year Built"]').placeholder = 'Newest Year Built';
},2000);

function replacePhoneLinks() {
    var links = document.querySelectorAll('.menu-item a[href^="/tel:"]');
    for( var i = 0; i < links.length; i++ ) {
        var linkArray = links[i].href.split('tel:');
        links[i].href = "tel:" + ( linkArray[1][0] === "+" ? "" : "+1" ) + linkArray[1];
    }
}
function replaceEmailLinks() {
    var links = document.querySelectorAll('.menu-item a[href^="/mailto:"]');
    for( var i = 0; i < links.length; i++ ) {
        var linkArray = links[i].href.split('/mailto:');
        links[i].href = "mailto:" + linkArray[1];
    }
}

window.addEventListener('load', function(event) {
    replacePhoneLinks();
    replaceEmailLinks();
});

var resizeTimer;

window.addEventListener('resize', function(e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        replacePhoneLinks();
        replaceEmailLinks();          
    }, 250);
});