

let todotext = document.getElementById("text");
let todolist = document.getElementById("todolist");
let add = document.getElementById("btn");
let text = document.getElementById("text");

add.addEventListener('click', function () {
    let list = document.createElement('li');

    // let div=document.createElement('div');
    // icon.style.alignSelf="center";
    // let icon1 = document.createElement('button');
    // icon1.style.float="right";
    // icon1.style.marginRight="5px";
    // icon1.innerText="Alter";
    // list.appendChild(icon1);
    // icon1.addEventListener('click', function () {
    //     prompt("Please change your list", list.innerText);
    // })


    let icon = document.createElement('button');
    icon.style.float = "right";
    icon.style.border = "none";
    icon.style.backgroundColor = "white";
    icon.style.cursor="pointer"

    // icon.innerText = "Delete"; 
    icon.className = "fa fa-trash fa-1x"

    icon.value = "delete";
    list.innerText = text.value;
    list.style.marginBottom = '5px';
    list.style.border = '1px solid black';
    list.style.listStyle = "none"


    list.style.padding = '5px';

    if (text.value != 0) {
        // console.log(text.value);
        todolist.appendChild(list);

        list.appendChild(icon);

        text.value = " ";
    }

    else {
        alert('Please add todo list');
    }

    icon.addEventListener('click', function () {

        list.remove();
    })




});
