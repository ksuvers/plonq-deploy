$(function() {
    $('.header__menu-line').on('click', function() {
        $('.header__menu-link').slideToggle();
    });

});
AOS.init({
    disable: 'mobile',
    offset: 400,
    duration: 2000
});