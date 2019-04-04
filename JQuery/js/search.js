
    function myFunction() {
        var input, filter, table, tr, td, i, txtValue;
        cityN = document.getElementById("sCity");
        stateN = document.getElementById("sState");
    
        filter = cityN.value.toUpperCase();
        filter1 = stateN.value.toUpperCase();
    
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");  
    
        if(cityN.value !== '' && stateN.value === '')
        {
            for (i = 0; i < tr.length; i++) 
            {
                td = tr[i].getElementsByTagName("td")[3];   		
                if (td) 
                {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }       
            }
        }
        if(stateN.value !== '' && cityN.value === '')
        {
            for (i = 0; i < tr.length; i++) 
            {
                td = tr[i].getElementsByTagName("td")[4];
                if (td) 
                {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter1) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }              
            }
        }
        if(stateN.value !== '' && cityN.value !== '')
        {
            for (i = 0; i < tr.length; i++) 
            {
                td = tr[i].getElementsByTagName("td")[3];
                tdd = tr[i].getElementsByTagName("td")[4];
                if (td && tdd) 
                {
                    txtValue = td.textContent || td.innerText;
                    txtValuee = tdd.textContent || tdd.innerText;	
                    if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValuee.toUpperCase().indexOf(filter1) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }       
            }
        }  	
    }
$(document).ready(function(){
    $("#hide").click(function(){
        $("#n1").hide(1500);
      });
    $("#show").click(function(){
        $("#n1").show();
    });
    $("#b1").click(function(){
        $("#n1").fadeToggle();
        $("#n2").fadeToggle("slow");
        $("#n3").fadeToggle(3000);
    });
    $("#b2").click(function(){
        $("#tog").slideToggle("2000");
    });
    
    $("#b3").click(function(){
        var n2 = $("#n2");
        n2.animate({height: '300px', opacity: '0.4'}, "slow");
        n2.animate({width: '300px', opacity: '0.3', fontSize: '3em'}, "slow");
        // n2.animate({}, "slow");
        n2.animate({height: '50px', opacity: '0.2'}, "slow");
        n2.animate({width: '100px', opacity: '0.9', fontSize: '1em'}, "slow");
        // n2.animate({}, "slow");
    });
    
    $("#b6").click(function(){
        $("#n6").css("color", "red").animate({height: '50px', opacity: '0.2', fontSize: '2em'}, "slow").hide(2000);
    });   
    
});