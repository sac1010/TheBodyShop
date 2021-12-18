document.querySelector("#btos").addEventListener("click", backtoshop);
function backtoshop(){
    window.location.href = "landingpage.html";
}

//PASSWORD VERIFICATION

document.querySelector("#sbtn").addEventListener("click",signin);
var exispass = JSON.parse(localStorage.getItem("regdetails"));
function signin(sin){
    sin.preventDefault();
    var pswd = document.querySelector("#epass").value;

    if(pswd.length == 0){
        alert("This is a required field");
    }

     else if(pswd.length > 0){
        for(var i = 0; i < exispass.length; i++){
            if(exispass[i].password == pswd){
                alert("Your are now logged in");
                window.location.href = "landingpage.html";
                break;
            }
            if(i == exispass.length -1){
             alert("Invalid password");
         }
        }
    }
}
