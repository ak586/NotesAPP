function addNotes() {
    var x = document.getElementById("myTextarea").value.trim();
    console.log(x);
    if(x==""){
        console.log("invalid input");
    }
    else{
        var divNew = document.createElement("div");
        var temp=document.createElement("p");
        var text = document.createTextNode(x);
        temp.appendChild(text);
        divNew.appendChild(temp);
       divNew.classList.add("row");
       divNew.classList.add("savedNotes");
       document.getElementById('main').appendChild(divNew)
       document.getElementById("myTextarea").value="";
    }
    }
  