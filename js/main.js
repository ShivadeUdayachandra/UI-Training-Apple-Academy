// Javascript Code goes here
//jquery code to style nav bar cative element
$(document).on('click','nav a',function(){
    $(this).addClass("select").siblings().removeClass("select");
});