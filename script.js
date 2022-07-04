let listTodo = [];
let listCompleted = [];
let numberItem = 0;

let add = document.querySelector("#add");
let list = document.querySelector(".list");
let tValue = document.querySelector("#tTodo");
let pValue = document.querySelector("#pTodo");
let hValue = document.querySelector("#hTodo");

let info = document.querySelector(".info");
let pInfo = document.createElement("p");
pInfo.textContent = numberItem + " item left";
info.appendChild(pInfo);

add.addEventListener("click", function () {
    if (tValue.value === "") {
        alert("U need to add a text in input")
    } else {
        let div = document.createElement("div");
        div.classList.add("work");

        // HOURS
        let hDiv = document.createElement("div");
        hDiv.classList.add("hour");
        let hour = document.createElement("p");
        hour.innerHTML = "Time : " + hValue.value;
        hDiv.appendChild(hour);

        // P
        let pDiv = document.createElement("div");
        pDiv.classList.add("pContent");
        let p = document.createElement("p");
        p.innerHTML = "Description :<br>" + pValue.value;
        pDiv.appendChild(p);

        // TITLE
        let tDiv = document.createElement('div');
        tDiv.classList.add("titleContent");
        let title = document.createElement("h2");
        title.innerHTML = tValue.value;
        tDiv.appendChild(title);

        // CONTENT TITLE -- P
        let titleP = document.createElement("div");
        titleP.classList.add("content");
        titleP.appendChild(tDiv);
        titleP.appendChild(pDiv);

        let buttonDiv = document.createElement("div");
        let button1 = document.createElement("button");
        button1.addEventListener("click", function () {
            listCompleted.push(div);
            listTodo.splice(div, 1);
            button1.remove();
            div.remove();
            numberItem--;
            pInfo.textContent = numberItem + " item left";
        })
        let button2 = document.createElement("button");
        buttonDiv.classList.add("button");
        button1.textContent = "Completed";
        button1.classList.add("remove");
        button2.textContent = "Edit";
        button2.classList.add("edit");

        buttonDiv.appendChild(button1);
        // buttonDiv.appendChild(button2);

        div.appendChild(hDiv);
        div.appendChild(titleP);
        div.appendChild(buttonDiv);

        listTodo.push(div);
        for (let i = 0; i < listTodo.length; i++) {
            let item = listTodo[i];
            list.appendChild(item);
        }
        numberItem++
        pInfo.textContent = numberItem + " item left";
    }
})

// COMPLETED ITEM
let completedMenu = document.querySelector("#completed");
completedMenu.addEventListener("click", function () {
    if (listCompleted.length >= 1) {
        for (let i = 0; i < listTodo.length; i++) {
            let item = listTodo[i];
            list.removeChild(item);
        }
        for (let i = 0; i < listCompleted.length; i++) {
            let item = listCompleted[i];
            list.appendChild(item);
        }
        pInfo.textContent = listCompleted.length + " item left completed";
    } else {
        alert("U have 0 completed item");
    }


})

let active = document.querySelector("#noCompleted");
active.addEventListener("click", function () {
    if (listTodo.length >= 1) {
        for (let i = 0; i < listCompleted.length; i++) {
            let item = listCompleted[i];
            list.removeChild(item);
        }
        for (let i = 0; i < listTodo.length; i++) {
            let item = listTodo[i];
            list.appendChild(item);
        }
        pInfo.textContent = listTodo.length + " item left active";
    } else {
        alert("U have 0 item active");
    }
})

let all = document.querySelector("#all");
all.addEventListener("click", function () {
    for (let i = 0; i < listTodo.length; i++) {
        let item = listTodo[i];
        list.appendChild(item);
    }
    for (let i = 0; i < listCompleted.length; i++) {
        let item = listCompleted[i];
        list.appendChild(item);
    }
    pInfo.textContent = (listCompleted.length + listTodo.length) + " item left";
})

let clearCompleted = document.querySelector("#clearCompleted");
clearCompleted.addEventListener("click", function () {
    if (listCompleted.length >= 1) {
        for (let i = 0; i < listCompleted.length; i++) {
            let item = listCompleted[i];
            list.removeChild(item);
        }
        listCompleted = [];
        pInfo.textContent = (listCompleted.length) + " item left completed";
        console.log(listCompleted);
    } else {
        alert("Impossible to clear, u have 0 item on u list.");
    }
})