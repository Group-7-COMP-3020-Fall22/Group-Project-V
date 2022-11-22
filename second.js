
    var nodeList = [];
    nodeList["node1240"] = ["false"];
    nodeList["node1010"] =  ["false"];
    nodeList["node1300"] =  ["false"];
    nodeList["node1500"] =   ["false"];
    nodeList["node1700"] =  ["false", "node1500"];
    nodeList["node1020"] =  ["false", "node1010"];
    nodeList["node2160"] =  ["false", "node1240", "node1020"];
    nodeList["node2180"] =  ["false", "node1700", "node1020"];
    nodeList["node2140"] =  ["false", "node1020", "node1240"];
    nodeList["node3190"] = ["false","node2140"];
    nodeList["node3380"] = ["false","node2140"];



    var borderWidth = "4px";

    var clickedBox = "#00DF9A";



    
    turnGreen();


    
       

     

   

    


  $('input[type="checkbox"]').click(function(e) 
  { 
    

    parentID = $(this).parent().attr("id");

    if ( checkReq(parentID))
    {
   
   

    if ( nodeList[parentID][0] == "false")
    {
    
        nodeList[parentID][0] = "true";
        this.parentElement.style.backgroundColor = clickedBox;
        
     }

      else { 
        nodeList[parentID][0] = "false";
        this.parentElement.style.backgroundColor = "#2c8b6d";
      }
    }
    else {
        $(this).prop('checked', !$(this).prop('checked')); // Prevent this from being check


    }

    turnGreen();
    
      
 })

 function checkReq(nodeID) {
    
    for (  var i = 1 ; i < nodeList[nodeID].length; i++   )
    {

        targetNode =  nodeList[nodeID][i] ;
        if (nodeList[targetNode][0] == "false")
        {
            return false;
        }
    }
    return true;

  }


  function turnGreen()
  {
 
    Object.keys(nodeList).forEach(function(x)
    {
        $("#" + x).css("border", "none");// remove border



      
        if (nodeList[x][0] == "false" && checkReq(x )  )
        {
            $("#" + x).css("background-color", "#00DF9A ");// Prevent this from being check
       
        }

        if ( !checkReq(x )) 
        {
            $(`#${x} :first-child`).prop('checked', false); // Uncheck the box
            $("#" + x).css("background-color" , "#2c8b6d");// Prevent this from being check
       

        }


    })
}

  
function validateF(node) {
    
    if (checkReq(node) ) {
        alert("You can'take this course. There is a missing prequesite");
    }
}    
 

function missingPreq() {
    alert("You can't take this course at the moment, it's missing a prequesite");
}


function showDiv()
{
    var x = document.getElementById("course-info");
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }


}

function changeBtnText()
{
    var x = document.getElementById("2140btn")
    x.innerHTML ="Added &#x2713;";
}

 
/*
  
var myFunction = function() {
    const cb = this.firstChild;
    //const cb = document.querySelector('#check1240');
    //alert();
    if (cb.checked)
    {
        
        this.parentElement.style.backgroundColor = "blue";
    }
    
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
    
}
*/