//Javascript for part3
//function that is called onload of the body in Part3.html
function go() {
    //gets the first body tag
    var body = document.getElementsByTagName("body")[0];
    //creates the div element
    var divTag = document.createElement("div");
    
    //creates the selectbox
    var selectBox = document.createElement("select");

    //Stores the json information
    var a = [];
    
    //stores the animal information into an array
    var animalList = [];
    
    //creates the xml request
    var xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:3000/',true);
    
    //on state change call the function
    xhr.onreadystatechange = processRequest;
   
    function processRequest(e){
        if(xhr.readyState == 4){
            //gets the json object stores it in a
            a = JSON.parse(xhr.responseText);
            //Fills the list of animals with information from the json
            for(var i=0; i<a.length;i++){
               
                animalList.push(new animal(a[i].Animal,a[i].Description));
            }
            
            //populates the select box
            for(var j=0; j<animalList.length;j++){
                var animalName = animalList[j].name;
                selectBox.options[selectBox.options.length]= new Option(animalName,j);
                
            }
            
            //adds an event listener to change the discription
            selectBox.addEventListener(
                'change',
                function(){divTag.innerHTML=animalList[selectBox.selectedIndex].discription;},
                false
            );
            
            //sets the default value
            divTag.innerHTML=animalList[selectBox.selectedIndex].discription;
        }
    }
    //sends the request
     xhr.send();
 
    //adds the selectbox and div(for the description) to the body
    body.appendChild(selectBox);
    body.appendChild(divTag);
    
}


//Function to create the animal
//assigns a newname(sting) to name
//assigns a newDiscription(string) to discription
function animal(newName,newDiscription)
{
    this.name=newName;
    this.discription= newDiscription;
}

