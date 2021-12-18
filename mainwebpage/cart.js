
var cartData = JSON.parse(localStorage.getItem("cartData")) || []; 


cartData.map(function (elem){
    var div = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src",elem.image)
    var name = document.createElement("h4");
    name.textContent = elem.name;
    var price = document.createElement("h4");
    price.textContent = "₹"+elem.price;

    div.append(image,name,price)

    document.querySelector("#cartArea").append(div)

})

displayTotal ()

function displayTotal(){

    var total = 0;

    for(var i = 0 ; i < cartData.length;i++){
        total = Number(cartData[i].price) + total; 
    }
    
    total = "Toal Purchase : " + total;
    
    
    var h1 = document.createElement("h3");
    
    h1.textContent = total;
    
    document.querySelector("#cartArea").append(h1)   
}





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