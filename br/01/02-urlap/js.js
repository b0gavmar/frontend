let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let pwdPattern = /^[\w]{8,256}$/;

//mo irszamok 1000-9999
//regex101 oldal

$(function () { //ready
    $("form").submit(function (event) {
        event.preventDefault();
    });
    $("input").change(function () {
        let email = $(this).val();
        let type = $(this).attr("type");
        let pw = $(this).val();
        if (!emailPattern.test(email) && type == "email") {
            $(".error").html("<p>Az email formátuma nem megfelelő!</p>");
        }
        else {
            $(".error").html("");
        }

        if (!pwdPattern.test(pw)) {
            $(".error").html("<p>Az jelszó formátuma nem megfelelő!</p>");
        }
        else {
            $(".error").html("");
        }
    });
    $(".button").attr("disabled",false);
});