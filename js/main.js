// Javascript Code goes here


function bf_validate() {
    var username = document.getElementById("bf_username").value;
    var password = document.getElementById("bf_password").value;
    if (username == "basil" && password == "123456") {
        alert("Login successfully");
        window.open("index_basil.html", "_self");
    }
    else {

        alert("Login failed-please enter correct username and password");
    }

}


//jquery code to style nav bar cative element
$(document).on('click', 'nav a', function () {
    $(this).addClass("mk_select").siblings().removeClass("mk_select");
});