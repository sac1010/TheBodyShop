function change(){

        
        
    var obj = {
        name : document.querySelector("#fname").value,
        last : document.querySelector("#lname").value,
        street : document.querySelector("#street").value,
        state : document.querySelector("#state").value,
        city : document.querySelector("#city").value,
        phone : document.querySelector("#phone").value
    }

    localStorage.setItem("data",JSON.stringify(obj))

    window.location.href = "procced.html";
}