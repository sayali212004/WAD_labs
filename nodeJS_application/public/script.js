$(document).ready(function () {
    // Sidebar toggle
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    // Dropdown menu
    $('.dropdown-toggle').dropdown();

    // Active menu item highlight
    $('.components li').on('click', function() {
        $('.components li').removeClass('active');
        $(this).addClass('active');
    });
});