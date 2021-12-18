var data1 = [
    {
        imgurl : "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1097345_2.jpg",
        name: "Avacado Body Butter",
        price : "₹1395.00",
        btntxt : "VIEW"
    },
    {
        imgurl : "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1097735_SHAMPOO_Tea_Tree_250MLBRNZ_INAAUPS031.jpg",
        name: "Tea Tree Purifying & Balancing Shampoo",
        price : "₹745.00",
        btntxt : "VIEW"
    },
    {
        imgurl : "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1097364_BODY_BUTTER_ALMOND_MILK_200ML_A0X_BRNZ_INECMPS059_1.jpg",
        name: "Almond Milk Body Butter",
        price : "₹1395.00",
        btntxt : "VIEW"
    },
    {
        imgurl : "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1010255_WHITE_MUSK_LOVER_EAU_DE_PARFUM_15ML_A0X_BRNZ_INECOPS072.jpg",
        name: "White Musk® Lover Fragrance Layering Topper",
        price : "₹1345.00",
        btntxt : "VIEW"
    },
    {
        imgurl : "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1097747_CONDITIONER_Moringa_250MLBRNZ_INAAUPS038.jpg",
        name: "Morgina Shine & Protection Conditioner",
        price : "₹745.00",
        btntxt : "VIEW"
    },
    {
        imgurl : "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1010039_Lip_and_Cheek_Stain_Sunshine_orange_BRNZ_INECMPS388.jpg",
        name: "Lip & Cheek Stain Sunshine Orange",
        price : "₹995.00",
        btntxt : "VIEW"
    },
    {
        imgurl : "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1097732_HAIR_MIST_Moringa_100ml_BRNZ_INAAUPS039.jpg",
        name: "Morgina Shine & Protection Hair Mist",
        price : "₹1345.00",
        btntxt : "VIEW"
    },
    {
        imgurl : "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/Argan_Body_Butter_2.jpg",
        name: "Argan Body Butter",
        price : "₹1395.00",
        btntxt : "VIEW"
    }
]

data1.map(function(elem){
    var box = document.createElement("div");
    box.setAttribute("class","mb");
    var box2 = document.createElement("div");
    box2.setAttribute("class","fb");
    var box3 = document.createElement("div");
    box3.setAttribute("class","sb");
    var btn = document.createElement("button");
    btn.setAttribute("class","btntxt");
    btn.textContent = elem.btntxt;
    var img = document.createElement("img");
    img.setAttribute("src",elem.imgurl)
    var name = document.createElement("h5");
    name.textContent = elem.name;
    var price = document.createElement("p");
    price.textContent = elem.price;
    box2.append(img);
    box3.append(name,price)
    box.append(box2,box3,btn);
    document.getElementById("aftrnew").append(box)
});

