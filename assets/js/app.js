$(document).ready(function() {

    $('.custom-tooltip').tooltip({
        template: '<div class="tooltip custom-tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
    });

    $('.custom-tooltip').on('show.bs.tooltip', function() {
        var tooltip = $(this).next('.tooltip');
        tooltip.find('.tooltip-inner').css({
            'background-color': '#444', 
            'color': '#eee', 
            'border': '2px solid #666',
            'padding': '15px', 
            'font-size': '16px', 
            'border-radius': '8px'
        });
        tooltip.find('.tooltip-arrow').css({
            'border-bottom-color': '#444'
        });
    });

    $('.botonalerta').on('click', function() {
        alert("El correo fue enviado correctamente...");
    });

    $('.textred').dblclick(function() {
        $(this).css("color", "red");
    });

    $('.toggle').on('click', function() {
        $(this).next('.togglefect').toggle();
    });
});
