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