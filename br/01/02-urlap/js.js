let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let pwdPattern = /^[\w]{8,256}$/;
let errorMsg;

//mo irszamok 1000-9999
//regex101 oldal

$(function () { //ready
    $("form").submit(function (event) {
        event.preventDefault();
    });
    $("input").change(function () {
        errorMsg = "";
        let email = $(this).val();
        let type = $(this).attr("type");
        let pw = $(this).val();
        if (!emailPattern.test(email) && type == "email") {
            errorMsg += "<p>Az email formátuma nem megfelelő!</p>";
            $(".error").html(errorMsg);
        }
        else {
            $(".error").html("");
        }

        if (!pwdPattern.test(pw)) {
            errorMsg += "<p>Az jelszó formátuma nem megfelelő!</p>";
            $(".error").html(errorMsg);
        }
        else {
            $(".error").html("");
        }
    });
    $(".button").attr("disabled",false);
});