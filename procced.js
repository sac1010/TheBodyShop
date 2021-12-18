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



mapping();

function mapping(){

    document.querySelector("#showDetails").innerHTML = "";

    var total = 0;

    for(var i = 0 ; i < cartData.length;i++){
        total = Number(cartData[i].price) + total +100; 
    }
    
    total = "Toal Purchase : " + total;
    
    
    var h1 = document.createElement("h3");
    h1.setAttribute("id","total")
    
    h1.textContent = total;
    
    document.querySelector("#showDetails").append(h1);

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
    
        document.querySelector("#showDetails").append(maindiv)
    
    })
    

}



function deletask(index){
    cartData.splice(index,1)
    localStorage.setItem("cartData", JSON.stringify(cartData));
    mapping();

}

