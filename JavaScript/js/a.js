function myF(x) {
    x.style.background = "orange";
}

function myFu(x){
    x.style.background = "yellow";
}

function getimg1(){
    document.getElementById("setImg11").style.display = "inline";
    var logo1 = document.getElementById("getImg11").value;
    document.getElementById("setImg11").src = logo1;

}
function getimg2(){
    document.getElementById("setImg12").style.display = "inline";
    var logo2 = document.getElementById("getImg12").value;
    document.getElementById("setImg12").src = logo2;

}
function getimg3(){
    document.getElementById("setImg13").style.display = "inline";
    var logo3 = document.getElementById("getImg13").value;
    document.getElementById("setImg13").src = logo3;

}

function himg1(){
    document.getElementById("setImg11").style.display = "none";
}
function himg2(){
    document.getElementById("setImg12").style.display = "none";
}
function himg3(){
    document.getElementById("setImg13").style.display = "none";
}

function getimg(){
    document.getElementById("formq").style.display = "none";
    document.getElementById("mainP").style.display = "inline";

    
    var pageTitle = document.getElementById("getPageTitle").value;
    var pageTitleCol = document.getElementById("getTitleCol").value;

    var article = document.getElementById("getArticle").value;
    var editerName1 = document.getElementById("getEditerName1").value;


    var video1 = document.getElementById("getVideo").value;

    var year = document.getElementById("getYear").value;
    var filem = document.getElementById("getFilem").value;
    var coll = document.getElementById("getColl").value;

    var editerName2 = document.getElementById("getEditerName2").value;


    var li1 = document.getElementById("getlist1").value;
    var li2 = document.getElementById("getlist2").value;
    var li3 = document.getElementById("getlist3").value;

    var logoDetail = document.getElementById("getLogoDetail").value;

    var logo = document.getElementById("getlogo").value;

    var citeName = document.getElementById("getCiteName").value;
    var citeOwner = document.getElementById("getCiteOwner").value;

    //SET VALUE



    document.getElementById("setPageTitle").innerHTML = pageTitle;
    document.getElementById("setPageTitle").style.color = pageTitleCol;

    document.getElementById("setArticle").innerHTML = article;
    document.getElementById("setEditerName1").innerHTML = editerName1;

    document.getElementById("setVideo").src = video1;

    document.getElementById("setYear").innerHTML = year;
    document.getElementById("setFilem").innerHTML = filem;
    document.getElementById("setColl").innerHTML = coll;

    document.getElementById("setEditerName2").innerHTML = editerName2;
    document.getElementById("setDate").innerHTML = Date();
    

    document.getElementById("setlist1").innerHTML = li1;
    document.getElementById("setlist2").innerHTML = li2;
    document.getElementById("setlist3").innerHTML = li3;

    document.getElementById("setLogoDetail").innerHTML = logoDetail;

    document.getElementById("setlogo").src = logo;

    document.getElementById("setCiteName").src = citeName;
    document.getElementById("setCiteOwner").src = citeOwner;
}