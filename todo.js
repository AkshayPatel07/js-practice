
let todoList = [
    {
      item: 'Buy Milk',
      dueDate: '4/10/2023'
    },
    {
      item: 'Go to College',
      dueDate: '4/10/2023'
    }
];

displayItems();

function todoTask(){
    let inputElement = document.querySelector("#inputTask");
    let dateElement = document.querySelector("#todo-date");
    let getInputElement = inputElement.value;
    let getdateElement = dateElement.value;

    todoList.push({item: getInputElement, dueDate: getdateElement});

    inputElement.value = "";
    dateElement.value = "";

    displayItems();

}

function displayItems(){
   let containerElement = document.querySelector(".taskContainer");
   let newHtml = "";

   for(let i = 0; i < todoList.length; i++ ){
    let {item, dueDate} = todoList[i];
    newHtml = newHtml + `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btnDelete" onclick="todoList.splice(${i}, 1);
        displayItems();">Delete</button>
    `;
   }

   containerElement.innerHTML = newHtml;
}