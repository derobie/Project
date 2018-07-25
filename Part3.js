//Javascript for part3
function go() {
    var body = document.getElementsByTagName("body")[0];
    var divTag = document.createElement("div");
    
    var selectBox = document.createElement("select");
    
    $(document).ready(function(){
        //divTag.innerHTML = "test2"
        
    })

    var xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:3000/',true);
    
    
    xhr.onreadystatechange = processRequest;
   
    function processRequest(e){
        if(xhr.readyState == 4){
            divTag.innerHTML = "test2";
            alert(xhr.status);
            
        }
    }
     xhr.send();
     
     
    body.appendChild(divTag);
    body.appendChild(selectBox);
    
}



function animal(newName,newDiscription)
{
    this.name=newName;
    this.discription= newDiscription;
}

