const header = document.querySelector("header");
const links = document.getElementsByClassName("links")
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove("scroll-up");
    }

    if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
        header.classList.remove("scroll-up");
        header.classList.add("scroll-down");
    }

    if (currentScroll < lastScroll && header.classList.contains("scroll-down")) {
        header.classList.remove("scroll-down");
        header.classList.add("scroll-up");
    }

    if (window.scrollY == 200) {
        links.classList.add("tank");
    }
    lastScroll = currentScroll;
    console.log(window.scrollY);
})