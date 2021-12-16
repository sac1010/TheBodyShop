var obj = JSON.parse(localStorage.getItem("data")) || {};


    display()

    function display(){

        var div = document.createElement("div");
        div.textContent = obj.name+" "+obj.last+" "+obj.street+" "+obj.city+" "+obj.phone
        document.querySelector("#add").append(div);

    }


    function confirm(){

        var x = document.querySelector("#checkbox");
        if(x.checked === true){
           alert("order confirmed thanks for shopping")

        }
        else{
            
        }


    }

var cartData = JSON.parse(localStorage.getItem("cartData")) || []; 

cartData.map(function (elem){
    var div = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src",elem.image)
    image.setAttribute("class","imagesDo");
    var name = document.createElement("h4");
    name.textContent = elem.name;
    var price = document.createElement("h4");
    price.textContent = "₹"+elem.price;

    div.append(image,name,price)

    document.querySelector("#showDetails").append(div)

})


displayTotal ()

function displayTotal(){

    var total = 0;

    for(var i = 0 ; i < cartData.length;i++){
        total = Number(cartData[i].price) + total +100; 
    }
    
    total = "Total Purchased +" + "Delivery Charges = " + total;
    
    
    var h1 = document.createElement("h4");
    
    h1.textContent = total;
    
    document.querySelector("#showDetails").append(h1)   
}