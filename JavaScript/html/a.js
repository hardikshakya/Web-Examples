function myF(x) {
    x.style.background = "orange";
}

function myFu(x){
    x.style.background = "yellow";
}

function myFuz(x){
    if(x == 9){
        getVideo.style.background = "red";
    }
    if(x == 1){
        getImg11.style.background = "red";
    }
    if(x == 2){
        getImg12.style.background = "red";
    }
    if(x == 3){
        getImg13.style.background = "red";
    } 
    if(x == 4){
        getlogo.style.background = "red";
    }   
}
function checkz(z,q){
    var regex1 = RegExp(/[./]+[a-zA-Z]+.mp4/);
    if(regex1.test(z)){
        var logo1 = document.getElementById("getImg11").value;    
        check(logo1 , 1);
    }
    else{
        myFuz(9);
    }
}

function check(z,q){
 
    var regex1 = RegExp(/[./]+[a-zA-Z]+[.jpg|.png|.jpeg]/);
    if(regex1.test(z)){
        // getimg();      
        if(q == 1){
            // console.log('red'); 
            var logo2 = document.getElementById("getImg12").value;           
            check(logo2,2);
        }  
        if(q == 2){
            var logo3 = document.getElementById("getImg13").value;
            check(logo3,3);
        }
        if(q == 3){
            var logo = document.getElementById("getlogo").value;
            check(logo,4);
        }
        if(q == 4){
            getimg();
        }
    } else {
        if(q == 1){
            // console.log('red');            
            myFuz(1);
        }
        if(q == 2){
            myFuz(2);
        }
        
        if(q == 3){
            myFuz(3);
        }
        if(q == 4){
            myFuz(4);
        }
        // console.log('nhi chala');
    }

}

function getimgy(x){
    if(x == 1)
    {
        document.getElementById("setImg11").style.display = "inline";
        var logo1 = document.getElementById("getImg11").value;
        document.getElementById("setImg11").src = logo1;

    } 
    if(x == 2)
    {
        document.getElementById("setImg12").style.display = "inline";
        var logo2 = document.getElementById("getImg12").value;
        document.getElementById("setImg12").src = logo2;

    }
    if(x == 3)
    {
        document.getElementById("setImg13").style.display = "inline";
        var logo3 = document.getElementById("getImg13").value;
        document.getElementById("setImg13").src = logo3;
    }
}

function himg(y){
    if(y == 1)
    {
        document.getElementById("setImg11").style.display = "none";
    } 
    if(y == 2)
    {
        document.getElementById("setImg12").style.display = "none";
    }
    if(y == 3)
    {
        document.getElementById("setImg13").style.display = "none";
    }
}

function geti(){
    var video1 = document.getElementById("getVideo").value;
    checkz(video1, 9);
    
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