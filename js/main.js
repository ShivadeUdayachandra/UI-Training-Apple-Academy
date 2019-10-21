// Javascript Code goes here
//jquery code to style nav bar cative element
$(document).on('click','nav a',function(){
    $(this).addClass("mk_select").siblings().removeClass("mk_select");
});
//login styling
function mk_validate(){
    var un= document.getElementById("mk_un").value;
    var pa=document.getElementById("mk_pa").value;
   
    if(un=="manasa" && pa=="apple@123"){
        return true;
    }
    else{
        alert("enter valid details");
        return false;
    }
 }