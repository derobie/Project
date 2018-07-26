//Javascript for dynamically creating selectboxs
function go() {
    //gets the body tag of the html
    var body = document.getElementsByTagName("body")[0];
    // creates a div tag
    var divTag = document.createElement("div");
    
    //creates the select box
    var selectBox = document.createElement("select");
    
    //creates an empty array
    var animals=[];
    
    //pushes animals into the array
    animals.push(new animal("lions","scary"));
    animals.push(new animal("giraffe","tall"));
    animals.push(new animal("shark","also scarry"));
    animals.push(new animal("Tiger","super cool super dangerous"));
    animals.push(new animal("Elephants","one of my favorite animals"));
    animals.push(new animal("Bat","uses sonar"));
    animals.push(new animal("Deer","very common in Ohio"));
    animals.push(new animal("Rabbit","small furry creature"));
    animals.push(new animal("squirrel","hides nuts in the winter"));
    animals.push(new animal("Dolphin","super smooth super fun"));
    
    //populates the select list
    for(var i=0; i<animals.length;i++){
        var itemName=animals[i].name;
        selectBox.options[selectBox.options.length]=new Option(itemName, i);
    }
    
    //adds event listener for on change to update the discription
    
    selectBox.addEventListener(
        'change',
        function(){divTag.innerHTML=animals[selectBox.selectedIndex].discription;},
        false
    );
    //sets up default value
    divTag.innerHTML=animals[selectBox.selectedIndex].discription;
    //adds the div and the select box
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