$(document).ready(function() {
    window.sr = ScrollReveal();
    sr.reveal(".scala-logo-container",  { duration: 2000, delay: 100, mobile: false });

    $("a").on('click', function(event) {
        console.log(this.hash);
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({ scrollTop: $(hash).offset().top }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});
