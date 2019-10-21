// Javascript Code goes here
//jquery code to style nav bar cative element
$(document).on('click', 'nav a', function () {
    $(this).addClass("mk_select").siblings().removeClass("mk_select");
});

function dr_check() {
    name = document.getElementById("name").value;
    pass = document.getElementById("pass").value;
    if (name == "ramesh" && pass == "12345") {
        return true;
    }
    else {
        document.getElementById("error").innerHTML = "* Enter correct credentials......!"
        return false;
    }
}