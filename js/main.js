// Javascript Code goes here
$(document).on('click','nav a',function(){
    $(this).addClass("select").siblings().removeClass("select");
});