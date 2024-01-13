
$(document).ready(function() {


    $("#signupForm1").click(function(e) {
        e.preventDefault();
        var email = $("#emailInput").val();
        var password = $("#passwordInput").val();

        function isValidEmail(email) {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function isValidPassword(password) {
            return password.length >= 6;
        }

        if (email!== "" && password !== "" &&isValidEmail(email) && isValidPassword(password)) {
            var userKey = email;
            var userData = {
                email: email,
                password: password
            };
            localStorage.setItem(userKey, JSON.stringify(userData));
            window.location.href = "./name.html?email=" + encodeURIComponent(email);
            }else if (email!== "" && isValidEmail(email) ){
                alert("Enter Valide Email")
            }else if (password !== "" && isValidPassword(password)) {
                alert("Enter Valide password")
            }
    });

});

function getQueryParameter(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
$(document).ready(function() {
    $("#signupForm2").click(function(e) {
        e.preventDefault();
        var email = getQueryParameter("email");
        let user = JSON.parse(localStorage.getItem(email ))
        var Fname = $("#Fname").val() ;
        var Lname = $("#Lname").val();
        var Country = $("#country").val();
        var Pnumber =$("#pNumber").val();
        if (email !== "" && Fname!=="" && Lname !== null && Country!=="" &&Pnumber!=="" ){
            user.Fname = Fname
            user.Lname =  Lname
            user.Country = Country
            user.pNumber = Pnumber
            var userKey = email ;
            localStorage.setItem(userKey , JSON.stringify(user))
            window.location.href= "../signin/signin.html" ;
        }else if(Fname == "" || Lname == ""){
            alert("Enter Correct name ");
        }else if(Country == "" ){
            alert("Enter Value in Country Field  ")
        }else if (Pnumber == "") {
            alert("Enter Value in Phone Number Field")
        }


    });



});
