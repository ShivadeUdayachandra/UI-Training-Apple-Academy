function validate(){
    var userName=document.getElementById("un").value;
    console.log(userName);
    var password=document.getElementById("ps").value;
    console.log(userName );
    if(userName=="mounika" && password=="apple@123")
    {
        console.log("tyyhgtyg");
        return true;
    }
    else{
      alert("Enter the valid details");
        return false;
    }
}