/*    //JS para que cambie cada 5 seg el carousel
    //se pone raro si cambio (manualmente) slide rapido
    var carousel = document.getElementById('myCarousel');
    
    // Slide inicial
    var currentIndex = 0;

    //query de slides
    var items = carousel.querySelectorAll('.carousel-item');

    // Cambio de slide next
    function showNextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }

    // cambio de slide back
    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
    }

    // Funcion muestra slide
    function showSlide(index) {
        items.forEach(function(item) {
            item.classList.remove('active');
        });

        items[index].classList.add('active');
    }

    // intervalo de cambio de slide
    setInterval(showNextSlide, 5000);

    //botones de control del slide
    document.querySelector('.carousel-control-prev').addEventListener('click', function() {
        showPrevSlide();
    });

    document.querySelector('.carousel-control-next').addEventListener('click', function() {
        showNextSlide();
    });
    Java Script para NavBar
    const nav = document.querySelector(".nav"),
    searchIcon = document.querySelector("#searchIcon"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");

    searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
    if (nav.classList.contains("openSearch")) {
        return searchIcon.classList.replace("uil-search", "uil-times");
    }
    searchIcon.classList.replace("uil-times", "uil-search");
    });

    navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search");
    });
    navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
    }); */
