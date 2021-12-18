var data = [
    {
        imgurl : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/b/s/bs-99967001-1.jpg",
        name: "Tea Tree Skin Clearing Clay Mask",
        price : "₹995.00",
    },
    {
        imgurl : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/e/p/eps_jpg_1076527_1_facial_mask_matcha_75ml_brnz_innpdps504.jpg",
        name: "Japanese Matcha Tea Pollution ",
        price : "₹2,195.00",
    },
    {
        imgurl : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/v/i/vitamin_e_moisture-protect_lip_care_spf_15_42g_1_inrslps688_1_.jpg",
        name: "Vitamin E Lip Care SPF 15",
        price : "₹395.00",
    },
    {
        imgurl : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/b/s/bs-50191001-1.jpg",
        name: "Tea Tree 3In 1 Wash Scrub Mask",
        price : "₹1345.00",
    },
    {
        imgurl : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/t/e/tea_tree_antiimperfection_daily_solution_50ml.jpg",
        name: "Tea Tree Anti-Imperfection Daily Solution",
        price : "₹1695.00",
    },
    {
        imgurl : "https://staticbodyshopstagingm23.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/e/p/eps_jpg_1089059_1_face_mask_coffee_75ml_brnz_incrhps086.jpg",
        name: "Nicaraguan Coffee Intense Awakening M...",
        price : "₹2,295.00",
    },
    {
        imgurl : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/t/e/tea_tree_night_lotion_30ml_1.jpg",
        name: "Tea Tree Night Lotion",
        price : "₹995.00",
    },
    {
        imgurl : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/b/s/bs-52110001-1.jpg",
        name: "Tea Tree Skin Clearing Mattifying Toner",
        price : "₹795.00",
    }
]

data.map(function(elem){
    var box = document.createElement("div");
    box.setAttribute("class","mainb");
    var box1 = document.createElement("div");
    box1.setAttribute("class","firstb");
    var box2 = document.createElement("div");
    box2.setAttribute("class","scndb");
    var icon = document.createElement("i");
    icon.setAttribute("class","far fa-heart");
    var img1 =  document.createElement("img");
    img1.setAttribute("src",elem.imgurl);
    var name1 =  document.createElement("h4");
    name1.textContent = elem.name;
    var price1 = document.createElement("p");
    price1.textContent = elem.price;
    box1.append(img1);
    box2.append(name1,price1);
    box.append(box1,box2,icon);
    document.getElementById("afterprsn").append(box)
});
document.querySelector("#brand").addEventListener("click",function(){
    window.location.href = "landingpage.html";
});