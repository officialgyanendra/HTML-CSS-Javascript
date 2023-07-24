let arr =
    JSON.parse(localStorage.getItem('arr')) || [];

renderDisplayList();
function renderDisplayList() {
    let todoHtml = '';
    arr.forEach((arObj, index) => {
        // for(let i=0; i<arr.length; i++){
        // let {name, dueDate} = arr[i];
        let { name, dueDate } = arObj;
        let html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-btn js-delete-btn" onclick="
        ">Delete</button>`
        todoHtml += html;

    })
    document.querySelector('.display-element').innerHTML = todoHtml;
    document.querySelectorAll('.js-delete-btn').forEach((delbtn, index) => {
        delbtn.addEventListener('click', () => {
            arr.splice(index, 1);
            saveToStorege();
            renderDisplayList();
        })
    })
}


document.querySelector('.js-add-btn').addEventListener('click', add);

function add() {
    const inputNameElement = document.querySelector('.js-name');
    let name = inputNameElement.value;
    const inputDateElement = document.querySelector('.js-date');
    let dueDate = inputDateElement.value;
    const displayObj = { name, dueDate };
    if (name && dueDate !== '') { arr.push(displayObj); }
    inputNameElement.value = '';
    inputDateElement.value = '';
    renderDisplayList();
    saveToStorege();
}
function saveToStorege() {
    ;
    localStorage.setItem('arr', JSON.stringify(arr));
}