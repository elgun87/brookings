    document.querySelector("#burger-btn").addEventListener('click', function(){
        document.querySelector('.nav-right').classList.add('visible');
    });

    document.querySelector('.nv-btn').addEventListener('click', function(){
        document.querySelector('.nav-right').classList.remove('visible');
    });

    $(window).scroll(function (event) {
        if ($(window).scrollTop() > 300) {
            $('#main-menu-search-bar-wrapper').addClass('main-menu-fixed');
        } else {
            $('#main-menu-search-bar-wrapper').removeClass('main-menu-fixed');
        }
    });