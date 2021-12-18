document.querySelector("#btos").addEventListener("click", backtoshop);
function backtoshop(){
    window.location.href = "landingpage.html";
}

//REGISTER

document.querySelector("#form").addEventListener("submit", register);
var rarr = JSON.parse(localStorage.getItem("regdetails")) || []

function register(det){
   det.preventDefault();

    var regobj = {
        mail : form.e.value,
        password : form.p.value,
        confirmpas : form.cp.value,
        fname : form.fn.value,
        lname : form.ln.value,
        dob : form.dob.value,
        gender : form.gndr.value,
        pinc : form.pc.value,
        phone : form.pn.value,
    }
    var count = 0;
    for(x in regobj){
        if(regobj[x].length == 0){
            alert("Your missing some fields");
            break;
        }
        else {
            count++;
        }
    }
    
    if(count == 9){
        rarr.push(regobj);
        console.log(rarr)
        localStorage.setItem("regdetails", JSON.stringify(rarr));
        alert("Your now logged in");
        window.location.href = "landingpage.html";
        
    }
    
}

