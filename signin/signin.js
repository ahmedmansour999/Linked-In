

$(document).ready(function(){
    $("#signin").click((e)=>{
        e.preventDefault()


        function searchEmail(){
            var email = $("#email").val() ;
            var password = $("#password").val();
            var storageLen = localStorage.length ;
            for (let i = 0; i < storageLen ; i++) {
                if (email === localStorage.key(i)) {
                    console.log("First Done");
                    var user = JSON.parse(localStorage.getItem(email))
                }
            }
            if(user){
                if (user.password == password) {
                    window.location.href = "../index.html?email=" + encodeURIComponent(email)
                }else{
                    window.alert("Enter Correct password")
                }
            }else{
                alert("Enter Correct Email")
            }
        }
        searchEmail()



    })
})