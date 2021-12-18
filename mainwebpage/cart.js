
var cartData = JSON.parse(localStorage.getItem("cartData")) || []; 

mapping();

function mapping(){

    document.querySelector("#cartArea").innerHTML = "";

    var total = 0;

    for(var i = 0 ; i < cartData.length;i++){
        total = Number(cartData[i].price) + total; 
    }
    
    total = "Toal Purchase : " + total;
    
    
    var h1 = document.createElement("h3");
    h1.setAttribute("id","total")
    
    h1.textContent = total;
    
    document.querySelector("#cartArea").append(h1);

    cartData.map(function (elem,index){
        
        var maindiv =  document.createElement("div");
        maindiv.setAttribute("id","maindiv");

        var div1 = document.createElement("div");
        div1.setAttribute("id","side")
        var btn = document.createElement("button");
        btn.setAttribute("id","remove")
        btn.textContent =  "x" ;
        btn.addEventListener("click",function(){
            deletask(index)
        })
        var image = document.createElement("img");
        image.setAttribute("id","cartImg")
        image.setAttribute("src",elem.image);
        div1.append(btn,image)


        var div2 = document.createElement("div");
        var name = document.createElement("h4");
        name.textContent = elem.name;
        var price = document.createElement("h4");
        price.textContent = "₹"+elem.price;
        div2.append(name,price)
    
        maindiv.append(div1,div2)
    
        document.querySelector("#cartArea").append(maindiv)
    
    })
    

}

function deletask(index){
    cartData.splice(index,1)
    localStorage.setItem("cartData", JSON.stringify(cartData));
    mapping();

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
document.getElementById("back").addEventListener("click",function(){
    window.location.href = "landingpage.html";
})