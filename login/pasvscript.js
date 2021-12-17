document.querySelector("#btos").addEventListener("click", backtoshop);
function backtoshop(){
    window.location.href = "home.html";
}

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
                window.location.href = "../header.html";
                break;
            }
            else if (exispass[i].password != pswd){
                alert("Invalid password");
                break;
            }
        }
    }
}
