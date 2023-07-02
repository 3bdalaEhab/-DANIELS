let span = document.querySelector(".back-to-top");
window.onscroll = function() {
    if(this.scrollY >= 200){
        span.classList.add("show");
    } else {
        span.classList.remove("show");
    }
};
