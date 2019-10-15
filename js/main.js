// Javascript Code goes here
//jquery code to style nav bar cative element
$(document).on('click','nav a',function(){
    $(this).addClass("mk_select").siblings().removeClass("mk_select");
});
