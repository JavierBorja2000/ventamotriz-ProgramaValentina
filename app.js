window.addEventListener("scroll", function(e) {
    const $header = document.getElementById("header")

    $header.classList.toggle("sticky", window.scrollY > 0)
})