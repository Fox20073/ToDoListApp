// JavaScript repeated bu jQuery

function NewItem(){
// JS
// Adding a new item to do 

    // let li = document.createElement("li");
    // let inputValue = document.getElementById("input").value;
    // let text = document.createTextNode(inputValue);
    // li.appendChild(text);

    // if (inputValue === '') {
    //     alert ("You must write something");
    // } else {
    //     let list = document.querySelector('#item');
    //     list.appendChild(li);
    // }

// crossing out task

    // function crossOut() {
    //     li.classList.toggle("strike");
    // }

    // li.addEventListener("dblclick", crossOut);



// Adding the "X" button

    // let crossOutButton = document.createElement("X");
    // crossOutButton.appendChild(document.createTextNode("X"));
    // li.appendChild(crossOutButton);

    // crossOutButton.addEventListener("click", deleteListItem);

// Add class delete
    // function deleteListItem(){
    //     li.classList.add("delete")
    // } 



// jQ
// Adding a new item to do 
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);

    if (inputValue === ''){
        alert ("You must write something");
    } else {
        $('#item').append(li);
    }


// crossing out task
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });
// Adding the "X" button

    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
        function deleteListItem(){
            li.addClass("delete")
        } 


// sort it out (same for JS and jQ)
$('#item').sortable();

}