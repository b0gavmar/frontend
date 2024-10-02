let rgbR;
let rgbG;
let rgbB;
let rgbO;

console.log('a')

$("input").mousemove(function () {
    rgbR = $("#rgbr").val();
    rgbG = $("#rgbg").val();
    rgbB = $("#rgbb").val();
    rgbO = $("#rgbo").val() / 100;

    //document.body.style.backgroundColor = 'rgb(' + rgbR + ',' + rgbG + ',' + rgbB + ',' + rgbO + ')';
    $("#szines").css("background-color", `rgba(${rgbR},${rgbG},${rgbB},${rgbO})`);
    //console.log('rgb(' + rgbR + ',' + rgbG + ',' + rgbB + ',' + rgbO + ')');
    $("#csuszkaertek").html(`rgba(${rgbR},${rgbG},${rgbB},${rgbO})`);
});
