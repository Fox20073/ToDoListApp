function NewItem(){
    
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