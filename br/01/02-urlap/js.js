let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let pwdPattern = /^[\w]{8,256}$/;
let irszPattern = /^[1-9][4]$/;
let errors = [];

//mo irszamok 1000-9999
//regex101 oldal

$(function () { //ready
    $("form").submit(function (event) {
        event.preventDefault();
    });
    $("input").change(function () {
        let email = $(this).val().trim();
        let pwd = $(this).val().trim();
        let irsz = $(this).val().trim();
        let type = $(this).attr("type");


        if (!emailPattern.test(email) && type == "email" && errors.filter(error => error.includes("email")) == null) {
            errors.push("<p>Az email formátuma nem megfelelő!</p>");
        }
        else {
            //errors2 = errors.filter(error => !error.includes("email"));
        }

        if (!pwdPattern.test(pwd) && type == "password") {
            errors.push("<p>Az jelszó formátuma nem megfelelő!</p>");
        }

        if (!irszPattern.test(irsz) && type == "text") {
            errors.push("<p>Az irányítószám formátuma nem megfelelő!</p>");
        }

        console.table(errors);
        $(".error").html(errors.join(""));
    });
    $(".button").attr("disabled", false);
});