function getQueryParameter(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

$(document).ready(function(){
    email = getQueryParameter("email");
    user = JSON.parse(localStorage.getItem(email)) ;
    console.log(user);
    var userName = $("#userName") ;
    var userLocation = $("#userLocation") ;
    var pNumber = $("#pNumber") ;
    var userEmail = $("#userEmail") ;
    userEmail.text(user.email)
    pNumber.text(user.pNumber)
    userName.text(user.Fname +" " +user.Lname)
    userLocation.text(user.Country)

    $("#signOut").click(()=>{
        window.location.href = "./signin/signin.html"
    })
    

})

