document.querySelector("#btos").addEventListener("click", backtoshop);
function backtoshop(){
    window.location.href = "home.html";
}

//LOGIN

document.querySelector("#nxt").addEventListener("click", logd);
var existing = JSON.parse(localStorage.getItem("regdetails")) || [];
function logd(event){
    event.preventDefault()
    var email = document.querySelector("#eml").value
    
    if(email.length == 0){
        alert("Please Enter Valid Email / Phone.");
    }
    else if(existing == 0){
        window.location.href = "registration.html";
    }
    else if(email.length > 0){
        for(var i = 0; i < existing.length; i++){
            if(existing[i].mail == email){
                // alert("existing user")
                window.location.href = "passverify.html";
                break;
            }
            else {
                window.location.href = "registration.html";
            }
        }
    }
}




