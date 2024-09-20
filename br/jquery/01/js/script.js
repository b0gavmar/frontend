//$(document).ready(function(){}) //amikor betölt, igy nem kell a defer

$(function () { //ez a felso rovidebb verzioja
    //console.log("betöltött");
    $(".bg-danger").click(function () {
        $(this).hide(1500);
    });
    $(".bg-success").mouseover(function () {
        $(this).fadeOut(1000);
    });
    $(".bg-primary").mouseleave(function () {
        $(this).slideUp(1500);
    });
    $(".btn-outline-warning").click(function () {
        $(".p-5").fadeIn(500);
    });
    $(".btn-outline-primary").click(function () {
        $(".sajat").animate({ height: '100px', width: '200px', opacity: '0.1' }, "slow");
        $(".sajat").animate({ width: '100px', opacity: '1' }, "slow");
        

    });
});
